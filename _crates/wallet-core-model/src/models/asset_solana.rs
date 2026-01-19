use {
    crate::models::asset_metadata::Metadata,
    serde::{Deserialize, Serialize},
    smbcloud_wallet_constants::{
        assets_solana::{
            ADDRESS_AAPLX, ADDRESS_ABTX, ADDRESS_ABBVX, ADDRESS_ACNX, ADDRESS_AMBRX,
            ADDRESS_AMZNX, ADDRESS_APPX, ADDRESS_AVGOX, ADDRESS_AZNX, ADDRESS_BACH_TOKEN,
            ADDRESS_BACX, ADDRESS_BRK_BX, ADDRESS_CBBTC, ADDRESS_CMCSAX, ADDRESS_COINX,
            ADDRESS_CRCLX, ADDRESS_CRMX, ADDRESS_CRWDX, ADDRESS_CSCOX, ADDRESS_CVXX,
            ADDRESS_DFDVX, ADDRESS_DHRX, ADDRESS_EURC, ADDRESS_GLDX, ADDRESS_GMEX,
            ADDRESS_GOOGLX, ADDRESS_GSX, ADDRESS_HDX, ADDRESS_HONX, ADDRESS_HOODX, ADDRESS_IBMX,
            ADDRESS_INTCX, ADDRESS_JNJX, ADDRESS_JPMX, ADDRESS_JUPITER, ADDRESS_KOX,
            ADDRESS_LINX, ADDRESS_LLYX, ADDRESS_MAX, ADDRESS_MCDX, ADDRESS_MDTX, ADDRESS_METAX,
            ADDRESS_MRKX, ADDRESS_MRVLX, ADDRESS_MSFTX, ADDRESS_MSTRX, ADDRESS_NFLXX,
            ADDRESS_NVDAX, ADDRESS_NVOX, ADDRESS_OPENX, ADDRESS_ORCLX, ADDRESS_PEPX,
            ADDRESS_PFEX, ADDRESS_PGX, ADDRESS_PLTRX, ADDRESS_PMX, ADDRESS_QQQX, ADDRESS_SOL,
            ADDRESS_SPYX, ADDRESS_STRCX, ADDRESS_TBLLX, ADDRESS_TMOX, ADDRESS_TONXX,
            ADDRESS_TQQQX, ADDRESS_TSLAX, ADDRESS_UNHX, ADDRESS_USD1, ADDRESS_USDC, ADDRESS_USDG,
            ADDRESS_USDS, ADDRESS_USDT, ADDRESS_VTIX, ADDRESS_VX, ADDRESS_WMTX, ADDRESS_XBTC,
            ADDRESS_XOMX, ADDRESS_ZBTC,
        },
        constants::SPL_TOKEN_PROGRAM_ID,
    },
    smbcloud_wallet_core_network::model::ErrorResponse,
    smbcloud_wallet_core_rpc::balance::{
        aggregate_spl_token_balance::aggregate_spl_token_balance, sol_balance::sol_balance,
    },
    tsync::tsync,
};

#[derive(Debug, Deserialize, Serialize)]
#[tsync]
pub enum SolanaAsset {
    Sol {
        meta: Metadata,
    },
    BachToken {
        meta: Metadata,
    },
    Jupiter {
        meta: Metadata,
    },
    /// Begin Bitcoin
    ZBtc {
        meta: Metadata,
    },
    CbBtc {
        meta: Metadata,
    },
    XBtc {
        meta: Metadata,
    },
    /// End Bitcoin
    /// Begin USD Stablecoins
    Usdc {
        meta: Metadata,
    },
    Usdt {
        meta: Metadata,
    },
    Usdg {
        meta: Metadata,
    },
    Usds {
        meta: Metadata,
    },
    Usd1 {
        meta: Metadata,
    },
    /// End USD Stablecoins
    /// Begin Euro stablecoins
    Eurc {
        meta: Metadata,
    },
    /// End Euro stablecoins
    /// Begin xStocks Tokenized US Stocks
    MsftX {
        meta: Metadata,
    },
    AmznX {
        meta: Metadata,
    },
    MetaX {
        meta: Metadata,
    },
    AaplX {
        meta: Metadata,
    },
    GooglX {
        meta: Metadata,
    },
    NvdaX {
        meta: Metadata,
    },
    TslaX {
        meta: Metadata,
    },
    AbtX {
        meta: Metadata,
    },
    AbbvX {
        meta: Metadata,
    },
    AcnX {
        meta: Metadata,
    },
    AmbrX {
        meta: Metadata,
    },
    AppX {
        meta: Metadata,
    },
    AznX {
        meta: Metadata,
    },
    BacX {
        meta: Metadata,
    },
    BrkBX {
        meta: Metadata,
    },
    AvgoX {
        meta: Metadata,
    },
    CvxX {
        meta: Metadata,
    },
    CrclX {
        meta: Metadata,
    },
    CscoX {
        meta: Metadata,
    },
    KoX {
        meta: Metadata,
    },
    CoinX {
        meta: Metadata,
    },
    CmcsaX {
        meta: Metadata,
    },
    CrwdX {
        meta: Metadata,
    },
    DhrX {
        meta: Metadata,
    },
    DfdvX {
        meta: Metadata,
    },
    LlyX {
        meta: Metadata,
    },
    XomX {
        meta: Metadata,
    },
    GmeX {
        meta: Metadata,
    },
    GldX {
        meta: Metadata,
    },
    GsX {
        meta: Metadata,
    },
    HdX {
        meta: Metadata,
    },
    HonX {
        meta: Metadata,
    },
    IntcX {
        meta: Metadata,
    },
    IbmX {
        meta: Metadata,
    },
    JnjX {
        meta: Metadata,
    },
    JpmX {
        meta: Metadata,
    },
    LinX {
        meta: Metadata,
    },
    MrvlX {
        meta: Metadata,
    },
    MaX {
        meta: Metadata,
    },
    McdX {
        meta: Metadata,
    },
    MdtX {
        meta: Metadata,
    },
    MrkX {
        meta: Metadata,
    },
    MstrX {
        meta: Metadata,
    },
    QqqX {
        meta: Metadata,
    },
    NflxX {
        meta: Metadata,
    },
    NvoX {
        meta: Metadata,
    },
    OpenX {
        meta: Metadata,
    },
    OrclX {
        meta: Metadata,
    },
    PltrX {
        meta: Metadata,
    },
    PepX {
        meta: Metadata,
    },
    PfeX {
        meta: Metadata,
    },
    PmX {
        meta: Metadata,
    },
    PgX {
        meta: Metadata,
    },
    HoodX {
        meta: Metadata,
    },
    CrmX {
        meta: Metadata,
    },
    SpyX {
        meta: Metadata,
    },
    StrcX {
        meta: Metadata,
    },
    TbllX {
        meta: Metadata,
    },
    TmoX {
        meta: Metadata,
    },
    TonxX {
        meta: Metadata,
    },
    TqqqX {
        meta: Metadata,
    },
    UnhX {
        meta: Metadata,
    },
    VtiX {
        meta: Metadata,
    },
    VX {
        meta: Metadata,
    },
    WmtX {
        meta: Metadata,
    },
    /// End xStocks Tokenized US Stocks
    // Local token
    BachToken0 {
        meta: Metadata,
    },
    BachToken1 {
        meta: Metadata,
    },
}

impl SolanaAsset {
    pub fn metadata(&self) -> Metadata {
        match self {
            Self::Sol { meta } => meta.to_owned(),
            Self::BachToken { meta } => meta.to_owned(),
            Self::ZBtc { meta } => meta.to_owned(),
            Self::CbBtc { meta } => meta.to_owned(),
            Self::XBtc { meta } => meta.to_owned(),
            Self::Jupiter { meta } => meta.to_owned(),
            Self::Usdc { meta } => meta.to_owned(),
            Self::Usdt { meta } => meta.to_owned(),
            Self::Usdg { meta } => meta.to_owned(),
            Self::Usds { meta } => meta.to_owned(),
            Self::Usd1 { meta } => meta.to_owned(),
            Self::Eurc { meta } => meta.to_owned(),
            Self::MsftX { meta } => meta.to_owned(),
            Self::AmznX { meta } => meta.to_owned(),
            Self::MetaX { meta } => meta.to_owned(),
            Self::AaplX { meta } => meta.to_owned(),
            Self::GooglX { meta } => meta.to_owned(),
            Self::NvdaX { meta } => meta.to_owned(),
            Self::TslaX { meta } => meta.to_owned(),
            Self::AbtX { meta } => meta.to_owned(),
            Self::AbbvX { meta } => meta.to_owned(),
            Self::AcnX { meta } => meta.to_owned(),
            Self::AmbrX { meta } => meta.to_owned(),
            Self::AppX { meta } => meta.to_owned(),
            Self::AznX { meta } => meta.to_owned(),
            Self::BacX { meta } => meta.to_owned(),
            Self::BrkBX { meta } => meta.to_owned(),
            Self::AvgoX { meta } => meta.to_owned(),
            Self::CvxX { meta } => meta.to_owned(),
            Self::CrclX { meta } => meta.to_owned(),
            Self::CscoX { meta } => meta.to_owned(),
            Self::KoX { meta } => meta.to_owned(),
            Self::CoinX { meta } => meta.to_owned(),
            Self::CmcsaX { meta } => meta.to_owned(),
            Self::CrwdX { meta } => meta.to_owned(),
            Self::DhrX { meta } => meta.to_owned(),
            Self::DfdvX { meta } => meta.to_owned(),
            Self::LlyX { meta } => meta.to_owned(),
            Self::XomX { meta } => meta.to_owned(),
            Self::GmeX { meta } => meta.to_owned(),
            Self::GldX { meta } => meta.to_owned(),
            Self::GsX { meta } => meta.to_owned(),
            Self::HdX { meta } => meta.to_owned(),
            Self::HonX { meta } => meta.to_owned(),
            Self::IntcX { meta } => meta.to_owned(),
            Self::IbmX { meta } => meta.to_owned(),
            Self::JnjX { meta } => meta.to_owned(),
            Self::JpmX { meta } => meta.to_owned(),
            Self::LinX { meta } => meta.to_owned(),
            Self::MrvlX { meta } => meta.to_owned(),
            Self::MaX { meta } => meta.to_owned(),
            Self::McdX { meta } => meta.to_owned(),
            Self::MdtX { meta } => meta.to_owned(),
            Self::MrkX { meta } => meta.to_owned(),
            Self::MstrX { meta } => meta.to_owned(),
            Self::QqqX { meta } => meta.to_owned(),
            Self::NflxX { meta } => meta.to_owned(),
            Self::NvoX { meta } => meta.to_owned(),
            Self::OpenX { meta } => meta.to_owned(),
            Self::OrclX { meta } => meta.to_owned(),
            Self::PltrX { meta } => meta.to_owned(),
            Self::PepX { meta } => meta.to_owned(),
            Self::PfeX { meta } => meta.to_owned(),
            Self::PmX { meta } => meta.to_owned(),
            Self::PgX { meta } => meta.to_owned(),
            Self::HoodX { meta } => meta.to_owned(),
            Self::CrmX { meta } => meta.to_owned(),
            Self::SpyX { meta } => meta.to_owned(),
            Self::StrcX { meta } => meta.to_owned(),
            Self::TbllX { meta } => meta.to_owned(),
            Self::TmoX { meta } => meta.to_owned(),
            Self::TonxX { meta } => meta.to_owned(),
            Self::TqqqX { meta } => meta.to_owned(),
            Self::UnhX { meta } => meta.to_owned(),
            Self::VtiX { meta } => meta.to_owned(),
            Self::VX { meta } => meta.to_owned(),
            Self::WmtX { meta } => meta.to_owned(),
            // Local token
            Self::BachToken0 { meta } => meta.to_owned(),
            Self::BachToken1 { meta } => meta.to_owned(),
        }
    }
}

/// Verified assets
impl SolanaAsset {
    pub fn verified_assets() -> Vec<Self> {
        vec![
            Self::native(),
            Self::bach_token(),
            Self::jupiter(),
            Self::zbtc(),
            Self::cbbtc(),
            Self::xbtc(),
            Self::usdc(),
            Self::usdt(),
            Self::usdg(),
            Self::usds(),
            Self::usd1(),
            Self::eurc(),
            Self::msftx(),
            Self::amznx(),
            Self::metax(),
            Self::aaplx(),
            Self::googlx(),
            Self::nvdax(),
            Self::tslax(),
            Self::abtx(),
            Self::abbvx(),
            Self::acnx(),
            Self::ambrx(),
            Self::appx(),
            Self::aznx(),
            Self::bacx(),
            Self::brk_bx(),
            Self::avgox(),
            Self::cvxx(),
            Self::crclx(),
            Self::cscox(),
            Self::kox(),
            Self::coinx(),
            Self::cmcsax(),
            Self::crwdx(),
            Self::dhrx(),
            Self::dfdvx(),
            Self::llyx(),
            Self::xomx(),
            Self::gmex(),
            Self::gldx(),
            Self::gsx(),
            Self::hdx(),
            Self::honx(),
            Self::intcx(),
            Self::ibmx(),
            Self::jnjx(),
            Self::jpmx(),
            Self::linx(),
            Self::mrvlx(),
            Self::max(),
            Self::mcdx(),
            Self::mdtx(),
            Self::mrkx(),
            Self::mstrx(),
            Self::qqqx(),
            Self::nflxx(),
            Self::nvox(),
            Self::openx(),
            Self::orclx(),
            Self::pltrx(),
            Self::pepx(),
            Self::pfex(),
            Self::pmx(),
            Self::pgx(),
            Self::hoodx(),
            Self::crmx(),
            Self::spyx(),
            Self::strcx(),
            Self::tbllx(),
            Self::tmox(),
            Self::tonxx(),
            Self::tqqqx(),
            Self::unhx(),
            Self::vtix(),
            Self::vx(),
            Self::wmtx(),
        ]
    }

    pub fn native() -> Self {
        Self::Sol {
            meta: Metadata::native(),
        }
    }
    pub fn bach_token() -> Self {
        Self::BachToken {
            meta: Metadata::bach_token(),
        }
    }
    pub fn zbtc() -> Self {
        Self::ZBtc {
            meta: Metadata::zbtc(),
        }
    }
    pub fn cbbtc() -> Self {
        Self::CbBtc {
            meta: Metadata::cbbtc(),
        }
    }
    pub fn xbtc() -> Self {
        Self::XBtc {
            meta: Metadata::xbtc(),
        }
    }
    pub fn jupiter() -> Self {
        Self::Jupiter {
            meta: Metadata::jupiter(),
        }
    }
    pub fn usdc() -> Self {
        Self::Usdc {
            meta: Metadata::usdc(),
        }
    }
    pub fn usdt() -> Self {
        Self::Usdt {
            meta: Metadata::usdt(),
        }
    }
    pub fn usdg() -> Self {
        Self::Usdg {
            meta: Metadata::usdg(),
        }
    }
    pub fn usds() -> Self {
        Self::Usds {
            meta: Metadata::usds(),
        }
    }
    pub fn usd1() -> Self {
        Self::Usd1 {
            meta: Metadata::usd1(),
        }
    }
    pub fn eurc() -> Self {
        Self::Eurc {
            meta: Metadata::eurc(),
        }
    }
    pub fn msftx() -> Self {
        Self::MsftX {
            meta: Metadata::msftx(),
        }
    }
    pub fn amznx() -> Self {
        Self::AmznX {
            meta: Metadata::amznx(),
        }
    }
    pub fn metax() -> Self {
        Self::MetaX {
            meta: Metadata::metax(),
        }
    }
    pub fn aaplx() -> Self {
        Self::AaplX {
            meta: Metadata::aaplx(),
        }
    }
    pub fn googlx() -> Self {
        Self::GooglX {
            meta: Metadata::googlx(),
        }
    }
    pub fn nvdax() -> Self {
        Self::NvdaX {
            meta: Metadata::nvdax(),
        }
    }
    pub fn tslax() -> Self {
        Self::TslaX {
            meta: Metadata::tslax(),
        }
    }
    pub fn abtx() -> Self {
        Self::AbtX {
            meta: Metadata::abtx(),
        }
    }
    pub fn abbvx() -> Self {
        Self::AbbvX {
            meta: Metadata::abbvx(),
        }
    }
    pub fn acnx() -> Self {
        Self::AcnX {
            meta: Metadata::acnx(),
        }
    }
    pub fn ambrx() -> Self {
        Self::AmbrX {
            meta: Metadata::ambrx(),
        }
    }
    pub fn appx() -> Self {
        Self::AppX {
            meta: Metadata::appx(),
        }
    }
    pub fn aznx() -> Self {
        Self::AznX {
            meta: Metadata::aznx(),
        }
    }
    pub fn bacx() -> Self {
        Self::BacX {
            meta: Metadata::bacx(),
        }
    }
    pub fn brk_bx() -> Self {
        Self::BrkBX {
            meta: Metadata::brk_bx(),
        }
    }
    pub fn avgox() -> Self {
        Self::AvgoX {
            meta: Metadata::avgox(),
        }
    }
    pub fn cvxx() -> Self {
        Self::CvxX {
            meta: Metadata::cvxx(),
        }
    }
    pub fn crclx() -> Self {
        Self::CrclX {
            meta: Metadata::crclx(),
        }
    }
    pub fn cscox() -> Self {
        Self::CscoX {
            meta: Metadata::cscox(),
        }
    }
    pub fn kox() -> Self {
        Self::KoX {
            meta: Metadata::kox(),
        }
    }
    pub fn coinx() -> Self {
        Self::CoinX {
            meta: Metadata::coinx(),
        }
    }
    pub fn cmcsax() -> Self {
        Self::CmcsaX {
            meta: Metadata::cmcsax(),
        }
    }
    pub fn crwdx() -> Self {
        Self::CrwdX {
            meta: Metadata::crwdx(),
        }
    }
    pub fn dhrx() -> Self {
        Self::DhrX {
            meta: Metadata::dhrx(),
        }
    }
    pub fn dfdvx() -> Self {
        Self::DfdvX {
            meta: Metadata::dfdvx(),
        }
    }
    pub fn llyx() -> Self {
        Self::LlyX {
            meta: Metadata::llyx(),
        }
    }
    pub fn xomx() -> Self {
        Self::XomX {
            meta: Metadata::xomx(),
        }
    }
    pub fn gmex() -> Self {
        Self::GmeX {
            meta: Metadata::gmex(),
        }
    }
    pub fn gldx() -> Self {
        Self::GldX {
            meta: Metadata::gldx(),
        }
    }
    pub fn gsx() -> Self {
        Self::GsX {
            meta: Metadata::gsx(),
        }
    }
    pub fn hdx() -> Self {
        Self::HdX {
            meta: Metadata::hdx(),
        }
    }
    pub fn honx() -> Self {
        Self::HonX {
            meta: Metadata::honx(),
        }
    }
    pub fn intcx() -> Self {
        Self::IntcX {
            meta: Metadata::intcx(),
        }
    }
    pub fn ibmx() -> Self {
        Self::IbmX {
            meta: Metadata::ibmx(),
        }
    }
    pub fn jnjx() -> Self {
        Self::JnjX {
            meta: Metadata::jnjx(),
        }
    }
    pub fn jpmx() -> Self {
        Self::JpmX {
            meta: Metadata::jpmx(),
        }
    }
    pub fn linx() -> Self {
        Self::LinX {
            meta: Metadata::linx(),
        }
    }
    pub fn mrvlx() -> Self {
        Self::MrvlX {
            meta: Metadata::mrvlx(),
        }
    }
    pub fn max() -> Self {
        Self::MaX {
            meta: Metadata::max(),
        }
    }
    pub fn mcdx() -> Self {
        Self::McdX {
            meta: Metadata::mcdx(),
        }
    }
    pub fn mdtx() -> Self {
        Self::MdtX {
            meta: Metadata::mdtx(),
        }
    }
    pub fn mrkx() -> Self {
        Self::MrkX {
            meta: Metadata::mrkx(),
        }
    }
    pub fn mstrx() -> Self {
        Self::MstrX {
            meta: Metadata::mstrx(),
        }
    }
    pub fn qqqx() -> Self {
        Self::QqqX {
            meta: Metadata::qqqx(),
        }
    }
    pub fn nflxx() -> Self {
        Self::NflxX {
            meta: Metadata::nflxx(),
        }
    }
    pub fn nvox() -> Self {
        Self::NvoX {
            meta: Metadata::nvox(),
        }
    }
    pub fn openx() -> Self {
        Self::OpenX {
            meta: Metadata::openx(),
        }
    }
    pub fn orclx() -> Self {
        Self::OrclX {
            meta: Metadata::orclx(),
        }
    }
    pub fn pltrx() -> Self {
        Self::PltrX {
            meta: Metadata::pltrx(),
        }
    }
    pub fn pepx() -> Self {
        Self::PepX {
            meta: Metadata::pepx(),
        }
    }
    pub fn pfex() -> Self {
        Self::PfeX {
            meta: Metadata::pfex(),
        }
    }
    pub fn pmx() -> Self {
        Self::PmX {
            meta: Metadata::pmx(),
        }
    }
    pub fn pgx() -> Self {
        Self::PgX {
            meta: Metadata::pgx(),
        }
    }
    pub fn hoodx() -> Self {
        Self::HoodX {
            meta: Metadata::hoodx(),
        }
    }
    pub fn crmx() -> Self {
        Self::CrmX {
            meta: Metadata::crmx(),
        }
    }
    pub fn spyx() -> Self {
        Self::SpyX {
            meta: Metadata::spyx(),
        }
    }
    pub fn strcx() -> Self {
        Self::StrcX {
            meta: Metadata::strcx(),
        }
    }
    pub fn tbllx() -> Self {
        Self::TbllX {
            meta: Metadata::tbllx(),
        }
    }
    pub fn tmox() -> Self {
        Self::TmoX {
            meta: Metadata::tmox(),
        }
    }
    pub fn tonxx() -> Self {
        Self::TonxX {
            meta: Metadata::tonxx(),
        }
    }
    pub fn tqqqx() -> Self {
        Self::TqqqX {
            meta: Metadata::tqqqx(),
        }
    }
    pub fn unhx() -> Self {
        Self::UnhX {
            meta: Metadata::unhx(),
        }
    }
    pub fn vtix() -> Self {
        Self::VtiX {
            meta: Metadata::vtix(),
        }
    }
    pub fn vx() -> Self {
        Self::VX {
            meta: Metadata::vx(),
        }
    }
    pub fn wmtx() -> Self {
        Self::WmtX {
            meta: Metadata::wmtx(),
        }
    }

    pub fn smallest_denomination(self) -> f64 {
        10_u64.pow(self.metadata().decimal as u32) as f64
    }

    pub fn from_address(address: String) -> Option<Self> {
        match address.as_str() {
            ADDRESS_SOL => Some(Self::native()),
            ADDRESS_BACH_TOKEN => Some(Self::bach_token()),
            ADDRESS_JUPITER => Some(Self::jupiter()),
            ADDRESS_ZBTC => Some(Self::zbtc()),
            ADDRESS_CBBTC => Some(Self::cbbtc()),
            ADDRESS_XBTC => Some(Self::xbtc()),
            ADDRESS_USDC => Some(Self::usdc()),
            ADDRESS_USDT => Some(Self::usdt()),
            ADDRESS_USDG => Some(Self::usdg()),
            ADDRESS_USDS => Some(Self::usds()),
            ADDRESS_USD1 => Some(Self::usd1()),
            ADDRESS_EURC => Some(Self::eurc()),
            ADDRESS_MSFTX => Some(Self::msftx()),
            ADDRESS_AMZNX => Some(Self::amznx()),
            ADDRESS_METAX => Some(Self::metax()),
            ADDRESS_AAPLX => Some(Self::aaplx()),
            ADDRESS_GOOGLX => Some(Self::googlx()),
            ADDRESS_NVDAX => Some(Self::nvdax()),
            ADDRESS_TSLAX => Some(Self::tslax()),
            ADDRESS_ABTX => Some(Self::abtx()),
            ADDRESS_ABBVX => Some(Self::abbvx()),
            ADDRESS_ACNX => Some(Self::acnx()),
            ADDRESS_AMBRX => Some(Self::ambrx()),
            ADDRESS_APPX => Some(Self::appx()),
            ADDRESS_AZNX => Some(Self::aznx()),
            ADDRESS_BACX => Some(Self::bacx()),
            ADDRESS_BRK_BX => Some(Self::brk_bx()),
            ADDRESS_AVGOX => Some(Self::avgox()),
            ADDRESS_CVXX => Some(Self::cvxx()),
            ADDRESS_CRCLX => Some(Self::crclx()),
            ADDRESS_CSCOX => Some(Self::cscox()),
            ADDRESS_KOX => Some(Self::kox()),
            ADDRESS_COINX => Some(Self::coinx()),
            ADDRESS_CMCSAX => Some(Self::cmcsax()),
            ADDRESS_CRWDX => Some(Self::crwdx()),
            ADDRESS_DHRX => Some(Self::dhrx()),
            ADDRESS_DFDVX => Some(Self::dfdvx()),
            ADDRESS_LLYX => Some(Self::llyx()),
            ADDRESS_XOMX => Some(Self::xomx()),
            ADDRESS_GMEX => Some(Self::gmex()),
            ADDRESS_GLDX => Some(Self::gldx()),
            ADDRESS_GSX => Some(Self::gsx()),
            ADDRESS_HDX => Some(Self::hdx()),
            ADDRESS_HONX => Some(Self::honx()),
            ADDRESS_INTCX => Some(Self::intcx()),
            ADDRESS_IBMX => Some(Self::ibmx()),
            ADDRESS_JNJX => Some(Self::jnjx()),
            ADDRESS_JPMX => Some(Self::jpmx()),
            ADDRESS_LINX => Some(Self::linx()),
            ADDRESS_MRVLX => Some(Self::mrvlx()),
            ADDRESS_MAX => Some(Self::max()),
            ADDRESS_MCDX => Some(Self::mcdx()),
            ADDRESS_MDTX => Some(Self::mdtx()),
            ADDRESS_MRKX => Some(Self::mrkx()),
            ADDRESS_MSTRX => Some(Self::mstrx()),
            ADDRESS_QQQX => Some(Self::qqqx()),
            ADDRESS_NFLXX => Some(Self::nflxx()),
            ADDRESS_NVOX => Some(Self::nvox()),
            ADDRESS_OPENX => Some(Self::openx()),
            ADDRESS_ORCLX => Some(Self::orclx()),
            ADDRESS_PLTRX => Some(Self::pltrx()),
            ADDRESS_PEPX => Some(Self::pepx()),
            ADDRESS_PFEX => Some(Self::pfex()),
            ADDRESS_PMX => Some(Self::pmx()),
            ADDRESS_PGX => Some(Self::pgx()),
            ADDRESS_HOODX => Some(Self::hoodx()),
            ADDRESS_CRMX => Some(Self::crmx()),
            ADDRESS_SPYX => Some(Self::spyx()),
            ADDRESS_STRCX => Some(Self::strcx()),
            ADDRESS_TBLLX => Some(Self::tbllx()),
            ADDRESS_TMOX => Some(Self::tmox()),
            ADDRESS_TONXX => Some(Self::tonxx()),
            ADDRESS_TQQQX => Some(Self::tqqqx()),
            ADDRESS_UNHX => Some(Self::unhx()),
            ADDRESS_VTIX => Some(Self::vtix()),
            ADDRESS_VX => Some(Self::vx()),
            ADDRESS_WMTX => Some(Self::wmtx()),
            // Local develoment tokens.
            "38JsCWEZ3dLRzcwxiCbL9rkkZqwwoWLAoCmqu7mWGSwq" => Some(Self::BachToken0 {
                meta: Metadata {
                    address,
                    name: "BACH Token Local 0".to_string(),
                    symbol: "BACHLOCAL0".to_string(),
                    decimal: 9,
                    logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/badd1dbe8c2d1e38c4f77b77f1d5fd5c60d3cccb/assets/mainnet/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf/bach-token-logo-Est.2022.png".to_string(),
                },
            }),
            "F1DKyNUT1zax4j241GiCPFJ9mG79HJtxeXPXH66L51Tp" => Some(Self::BachToken1 {
                meta: Metadata {
                    address,
                    name: "BACH Token Local 1".to_string(),
                    symbol: "BACHLOCAL1".to_string(),
                    decimal: 9,
                    logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/badd1dbe8c2d1e38c4f77b77f1d5fd5c60d3cccb/assets/mainnet/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf/bach-token-logo-Est.2022.png".to_string(),
                },
            }),
            _ => {
                println!("Unsupported Solana asset.");
                None
            }
        }
    }

    /// Get address' balance for this current asset.
    pub fn wallet_balance(
        self,
        rpc_url: String,
        address: String,
    ) -> Result<(u64, f64), ErrorResponse> {
        match self {
            SolanaAsset::Sol { meta: _ } => sol_balance(rpc_url, address),
            // All SPL tokens use the same balance aggregation logic
            _ => {
                let meta = self.metadata();
                aggregate_spl_token_balance(
                    rpc_url,
                    address,
                    SPL_TOKEN_PROGRAM_ID.to_string(),
                    meta.address,
                )
            }
        }
    }
}
