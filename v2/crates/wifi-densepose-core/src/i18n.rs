//! Internationalization (i18n) core module for Rust.
//!
//! Embedded translation dictionaries (`locales/en.json` and `locales/ja.json`)
//! with fallback to English and string parameter substitution.

use core::fmt;

#[cfg(feature = "std")]
use std::sync::OnceLock;

/// Supported locales.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Default)]
pub enum Locale {
    /// English (default fallback)
    #[default]
    En,
    /// Japanese
    Ja,
}

impl Locale {
    /// Parse locale from string.
    #[must_use]
    pub fn from_str(lang: &str) -> Self {
        if lang.eq_ignore_ascii_case("ja") || lang.to_lowercase().starts_with("ja") {
            Self::Ja
        } else {
            Self::En
        }
    }

    /// Language tag string.
    #[must_use]
    pub const fn as_str(self) -> &'static str {
        match self {
            Self::En => "en",
            Self::Ja => "ja",
        }
    }
}

impl fmt::Display for Locale {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(self.as_str())
    }
}

/// Embedded JSON translation strings
pub const EN_JSON: &str = include_str!("../../../../locales/en.json");
pub const JA_JSON: &str = include_str!("../../../../locales/ja.json");

#[cfg(feature = "std")]
static EN_VAL: OnceLock<Option<serde_json::Value>> = OnceLock::new();

#[cfg(feature = "std")]
static JA_VAL: OnceLock<Option<serde_json::Value>> = OnceLock::new();

#[cfg(feature = "std")]
fn get_dict(locale: Locale) -> Option<&'static serde_json::Value> {
    match locale {
        Locale::En => EN_VAL
            .get_or_init(|| serde_json::from_str(EN_JSON).ok())
            .as_ref(),
        Locale::Ja => JA_VAL
            .get_or_init(|| serde_json::from_str(JA_JSON).ok())
            .as_ref(),
    }
}

#[cfg(feature = "std")]
fn lookup_in_val<'a>(val: &'a serde_json::Value, key: &str) -> Option<&'a str> {
    if let Some(s) = val.get(key).and_then(serde_json::Value::as_str) {
        return Some(s);
    }
    let parts: Vec<&str> = key.split('.').collect();
    let mut curr = val;
    for part in parts {
        curr = curr.get(part)?;
    }
    curr.as_str()
}

/// Lookup translation key for given locale with fallback to English then default string.
#[must_use]
pub fn t_with_fallback(key: &str, locale: Locale, fallback: Option<&str>) -> String {
    #[cfg(feature = "std")]
    {
        if let Some(dict) = get_dict(locale) {
            if let Some(val) = lookup_in_val(dict, key) {
                return val.to_string();
            }
        }
        if locale != Locale::En {
            if let Some(dict_en) = get_dict(Locale::En) {
                if let Some(val) = lookup_in_val(dict_en, key) {
                    return val.to_string();
                }
            }
        }
    }

    fallback.map_or_else(|| key.to_string(), ToString::to_string)
}

/// Lookup translation key for given locale.
#[must_use]
pub fn t(key: &str, locale: Locale) -> String {
    t_with_fallback(key, locale, None)
}

/// Translate key and replace string format placeholders e.g. `{host}` -> `value`.
#[must_use]
pub fn t_format(key: &str, locale: Locale, params: &[(&str, &str)]) -> String {
    let mut res = t(key, locale);
    for (name, val) in params {
        let pattern = format!("{{{name}}}");
        res = res.replace(&pattern, val);
    }
    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_locale_parsing() {
        assert_eq!(Locale::from_str("ja"), Locale::Ja);
        assert_eq!(Locale::from_str("JA-JP"), Locale::Ja);
        assert_eq!(Locale::from_str("en-US"), Locale::En);
        assert_eq!(Locale::from_str("fr"), Locale::En);
    }

    #[test]
    fn test_translation_lookup() {
        let en_title = t("ui.dashboard.title", Locale::En);
        assert_eq!(en_title, "Revolutionary WiFi-Based Human Pose Detection");

        let ja_title = t("ui.dashboard.title", Locale::Ja);
        assert_eq!(ja_title, "画期的なWiFiベースの人体姿勢検出");
    }

    #[test]
    fn test_translation_fallback() {
        let missing_ja = t_with_fallback("nonexistent.key", Locale::Ja, Some("Default Text"));
        assert_eq!(missing_ja, "Default Text");

        let missing_no_fallback = t("nonexistent.key", Locale::En);
        assert_eq!(missing_no_fallback, "nonexistent.key");
    }

    #[test]
    fn test_translation_formatting() {
        let formatted = t_format(
            "cli.server_running",
            Locale::En,
            &[("host", "127.0.0.1"), ("port", "8080")],
        );
        assert_eq!(formatted, "Server running at 127.0.0.1:8080");

        let formatted_ja = t_format(
            "cli.server_running",
            Locale::Ja,
            &[("host", "127.0.0.1"), ("port", "8080")],
        );
        assert_eq!(formatted_ja, "サーバーが 127.0.0.1:8080 で稼働中");
    }
}
