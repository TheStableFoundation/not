export interface Translation {
  appName: string;
  home: string;
  lessons: string;
  wallet?: string;
  profile: string;
  settings: string;
  welcome: string;
  welcomePersonal: (name: string) => string;
  homeDesc: string;
  getStarted: string;
  startLesson: string;
  back: string;
  lessonCompleted: string;
  user: string;
  guest: string;
  progress: string;
  completed: string;
  question: string;
  of: string;
  afterChoice: string;
  correct: string;
  incorrect: string;
  startThisLesson: string;
  // Home page translations
  quickActions: string;
  dao: string;
  learn: string;
  tasks: string;
  activityFeed: string;
  bachAirdropLive: string;
  airdropDescription: string;
  claimYourAirdrop: string;
  claimYourBachAirdrop: string;
  signUpAndClaim: string;
  walletAddressUsedAirdrop: string;
  bachMoney: string;
  successClaimedAirdrop: string;
  claimAirdrop: string;
  signMessageProveOwnership: string;
  signing: string;
  signAndClaim: string;
  signatureOnlyForVerification: string;
  tryAgain: string;
  setYourUsername: string;
  chooseUsernamePersonalize: string;
  enterYourUsername: string;
  saveUsername: string;
  googleOAuthLogin: string;
  oAuthLoginExplanation: string;
  logout: string;

  onboardingCreateWalletTitle: string;
  onboardingImportWalletTitle: string;
  onboardingCreatePasswordTitle: string;
  onboardingDisclaimerTitle: string;
  onboardingDisclaimerDesc1: string;
  onboardingDisclaimerDesc2: string;
  onboardingDisclaimerDesc3: string;
  onboardingDisclaimerDesc4: string;
  onboardingDisclaimerNonCustodial: string;
  onboardingContinue: string;
  onboardingUnderstandContinue: string;
  onboardingSetPasswordDesc: string;
  onboardingPasswordRequired: string;
  onboardingPasswordMinLength: string;
  onboardingPasswordMismatch: string;
  onboardingPasswordFoundTitle: string;
  onboardingPasswordFoundDesc: string;
  onboardingUseExistingPassword: string;
  onboardingCreateNewPassword: string;
  onboardingImportSeedPhraseDesc: string;
  onboardingImportWalletButton: string;
  onboardingImportSuccess: string;
  onboardingImportWarning: string;
  onboardingKeypairsTitle: string;
  onboardingNoKeypairs: string;
  onboardingGenerateNewAddress: string;
  onboardingSavedSeedPhrase: string;
  onboardingImportantDialogTitle: string;
  onboardingImportantDialogDesc: string;
  errorOccurred: string;
  processing: string;
  confirm: string;
  saved: string;
  usernameSavedSuccessfully: string;
  // DAO page translations
  daoTitle: string;
  theStableFoundation: string;
  lockedDaoTokens: string;
  treasury: string;
  treasuryBalances: string;
  viewOnExplorer: string;
  failedToLoadDaoBalance: string;
  failedToLoadTreasuryBalances: string;
  retry: string;
  locked: string;
  activeProposals: string;
  noActiveProposals: string;
  failedToLoadProposals: string;
  yesVotes: string;
  noVotes: string;
  ends: string;
  aboutTreasuryFees: string;
  treasuryFeeDescription: string;
  treasuryFundsUsage: string;
  markets: string;
  viewProposals: string;
  openInRealms: string;
  // Learn page translations
  learnTitle: string;
  aiAssistant: string;
  aiWelcomeMessage: string;
  askPlaceholder: string;
  thinking: string;
  aiDisclaimerMessage: string;
  frequentlyAskedQuestions: string;
  // Learn page translations
  tasksTitle: string;
  // FAQ questions and answers
  faqWhatIsStableFoundation: string;
  faqWhatIsStableFoundationAnswer: string;
  faqWhatIsCryptocurrency: string;
  faqWhatIsCryptocurrencyAnswer: string;
  faqWhatIsBlockchain: string;
  faqWhatIsBlockchainAnswer: string;
  faqHowToKeepWalletSecure: string;
  faqHowToKeepWalletSecureAnswer: string;
  faqWhatAreTransactionFees: string;
  faqWhatAreTransactionFeesAnswer: string;
  faqWhatIsDao: string;
  faqWhatIsDaoAnswer: string;
  faqHowToParticipateGovernance: string;
  faqHowToParticipateGovernanceAnswer: string;
  faqWhatIsDefi: string;
  faqWhatIsDefiAnswer: string;
  // Wallet specific translations
  walletTitle: string;
  switchKeypairTitle: string;
  addressQrCode: string;
  noKeypairsFound: string;
  noSolWarningTitle: string;
  noSolWarningDescription: string;
  account: string;
  active: string;
  assets: string;
  activity: string;
  transactionHistory: string;
  viewWalletActivity: string;
  openInSolscan: string;
  noAssetsFound: string;
  defaultUsername: string;
  pleaseSelectUsername: string;
  usernameTooLong: string;
  updateUsernameFailed: string;
  editWallet: string;
  success: string;
  username: string;
  maxCharacters: string;
  saving: string;
  pleaseEnterValidAmount: string;
  pleaseSelectRecipient: string;
  failedToSendTokens: string;
  transactionCompletedSuccessfully: string;
  tokenType: string;
  amount: string;
  available: string;
  recipient: string;
  enterCustomAddress: string;
  recipientAddress: string;
  enterRecipientPublicKey: string;
  customAddress: string;
  sending: string;
  failedToGetQuote: string;
  failedToSwap: string;
  swapTokens: string;
  swapCompleted: string;
  from: string;
  to: string;
  swapTokensTooltip: string;
  quoteDetails: string;
  outputAmount: string;
  fee: string;
  priceImpact: string;
  route: string;
  direct: string;
  transactionReady: string;
  blockHeight: string;
  priorityFee: string;
  computeUnits: string;
  finalSlippage: string;
  executeSwap: string;
  getQuote: string;
  insufficientBalance: string;
  sendToken: string;
  simulationWarning: string;
  buildNewTransaction: string;
  slippage: string;
  slippagePercent: string;
  buildingTransaction: string;
  prepareSwap: string;
  toggleLockWallet: string;
  walletSettings: string;
  copyPubkey: string;
  switchKeypair: string;
  buySol: string;
  // Common actions
  cancel: string;
  save: string;
  // Wallet settings translations
  addWallet: string;
  createNew: string;
  showSeedPhrase: string;
  viewRecoveryPhrase: string;
  importExisting: string;
  network: string;
  management: string;
  importRecovery: string;
  destroyWallets: string;
  destroyAllData: string;
  // Security translations
  securityNotice: string;
  storeOffline: string;
  // Common UI
  dangerZone: string;
  irreversibleActions: string;
  // Finance translations
  send: string;
  swap: string;
  balance: string;
  // Lib components translations
  importSeedPhrase: string;
  createNewWallet: string;
  walletLocked: string;
  enterPassword: string;
  incorrectPassword: string;
  unlockWallet: string;
  notwalletCrypto: string;
  createYourWallet: string;
  // Settings pages translations
  congratulations: string;
  congratulationsMessage: string;
  gotIt: string;
  stableFoundationCopyright: string;
  easterEggFound: string;
  easterEggDescription: string;
  applicationInformation: string;
  version: string;
  installationId: string;
  loading: string;
  supportNote: string;
  preferences: string;
  theme: string;
  chooseAppearance: string;
  system: string;
  matchDevice: string;
  light: string;
  cleanBright: string;
  dark: string;
  easyEyes: string;
  changesApplyImmediately: string;
  language: string;
  selectLanguage: string;
  english: string;
  indonesian: string;
  // Common translations
  about: string;
  appInfo: string;
  appPreferences: string;
  languagePreferences: string;
  app: string;
  legalSupport: string;
  termsOfService: string;
  privacyPolicy: string;
  openSource: string;
  // About page translations
  aboutDescription: string;
  developedBy: string;
  swedish: string;
  debug: string;
}

export type SupportedLanguages = "en" | "sv" | "id";

export const translations: Record<SupportedLanguages, Translation> = {
  en: {
    appName: "NotWallet",
    home: "Home",
    lessons: "Lessons",
    settings: "Settings",
    wallet: "Wallet",
    profile: "Profile",
    welcome: "Welcome to NotWallet Crypto!",
    welcomePersonal: (name) => `Welcome back, ${name}!`,
    homeDesc: "A fun way to learn Persian.",
    getStarted: "Start Learning",
    startLesson: "Start",

    onboardingCreateWalletTitle: "Create Wallet",
    onboardingImportWalletTitle: "Import Wallet",
    onboardingCreatePasswordTitle: "Create Password",
    onboardingDisclaimerTitle: "Important Disclaimer",
    onboardingDisclaimerDesc1: "You are about to create a self-custody wallet.",
    onboardingDisclaimerDesc2:
      "You are the only one who controls your wallet and funds.",
    onboardingDisclaimerDesc3:
      "Your seed phrase is the ONLY way to recover your wallet and assets.",
    onboardingDisclaimerDesc4:
      "If you lose your seed phrase, {red}your funds cannot be recovered.",
    onboardingDisclaimerNonCustodial:
      "This is a non-custodial wallet. Only you have access to your private keys and funds.",
    onboardingContinue: "Continue",
    onboardingUnderstandContinue: "I Understand, Continue",
    onboardingSetPasswordDesc: "Set a strong password to protect your wallet.",
    onboardingPasswordRequired:
      "This password will be required to access your wallet on this device.",
    onboardingPasswordMinLength: "Password must be at least 6 characters.",
    onboardingPasswordMismatch: "Passwords do not match.",
    onboardingPasswordFoundTitle: "Password Found",
    onboardingPasswordFoundDesc:
      "A password already exists for this wallet. Would you like to use the existing password or create a new one?",
    onboardingUseExistingPassword: "Use Existing Password",
    onboardingCreateNewPassword: "Create New Password",
    onboardingImportSeedPhraseDesc:
      "Enter your 12 or 24-word seed phrase below to import your wallet.",
    onboardingImportWalletButton: "Import Wallet",
    onboardingImportSuccess: "Import Successful!",
    onboardingImportWarning:
      "Make sure no one is watching your screen. Never share your seed phrase with anyone.",
    onboardingKeypairsTitle: "Imported Keypairs",
    onboardingNoKeypairs: "No keypairs found.",
    onboardingGenerateNewAddress: "Generate New Address",
    onboardingSavedSeedPhrase: "I have saved my seed phrase",
    onboardingImportantDialogTitle: "Important!",
    onboardingImportantDialogDesc:
      "Your seed phrase is the only way to recover your wallet. If you lose it, you will lose access to your funds forever. Make sure you have securely saved your seed phrase before continuing.",
    errorOccurred: "An error occurred. Please try again.",
    processing: "Processing...",
    confirm: "Confirm",
    back: "← Back",
    lessonCompleted: "Lesson Complete! 🎉",
    user: "Username",
    guest: "Guest",
    progress: "Progress",
    completed: "lesson(s) completed",
    question: "Question",
    of: "of",
    afterChoice: "The result will be shown after you select.",
    correct: "Correct!",
    incorrect: "Incorrect!",
    startThisLesson: "Start Lesson",
    // Home page translations
    quickActions: "Quick Actions",
    dao: "DAO",
    learn: "Learn",
    tasks: "Tasks",
    activityFeed: "Activity Feed",
    bachAirdropLive: "🪂 BACH Airdrop Live!",
    airdropDescription:
      "Multiple ways to earn your BACH tokens! Complete tasks, contribute to the music database, and participate in the ecosystem.",
    claimYourAirdrop: "Claim Your Airdrop →",
    claimYourBachAirdrop: "🎉 Claim Your $BACH Airdrop!",
    signUpAndClaim: "Sign Up & Claim",
    walletAddressUsedAirdrop:
      "Your wallet address will be used for the airdrop.",
    bachMoney: "bach.money",
    successClaimedAirdrop: "🎊 Success! You have claimed your airdrop.",
    claimAirdrop: "Claim Airdrop",
    signMessageProveOwnership:
      "Sign this message to prove wallet ownership and claim your airdrop.",
    signing: "Signing...",
    signAndClaim: "Sign & Claim",
    signatureOnlyForVerification:
      "Your signature is only used to verify your wallet address.",
    tryAgain: "Try Again",
    setYourUsername: "👤 Set Your Username",
    chooseUsernamePersonalize: "Choose a username to personalize your wallet.",
    enterYourUsername: "Enter your username",
    saveUsername: "Save Username",
    saved: "Saved",
    usernameSavedSuccessfully: "Username saved successfully!",
    oAuthLoginExplanation: "Claim with your Google account",
    googleOAuthLogin: "Login with Google",
    logout: "Log out",
    // DAO page translations
    daoTitle: "DAO",
    theStableFoundation: "The Stable Foundation",
    lockedDaoTokens: "Locked DAO Tokens",
    treasury: "Treasury Wallet",
    treasuryBalances: "Treasury Balances",
    viewOnExplorer: "View on Explorer",
    failedToLoadDaoBalance: "Failed to load DAO balance",
    failedToLoadTreasuryBalances: "Failed to load treasury balances",
    retry: "Retry",
    locked: "Locked",
    activeProposals: "Active Proposals",
    noActiveProposals: "No active proposals at this time",
    failedToLoadProposals: "Failed to load proposals",
    yesVotes: "Yes Votes",
    noVotes: "No Votes",
    ends: "Ends",
    aboutTreasuryFees: "About Treasury Fees",
    treasuryFeeDescription:
      "The Stable Foundation Treasury collects a 0.25% fee on all transactions to support the development and maintenance of the NotWallet Crypto ecosystem.",
    treasuryFundsUsage:
      "These funds are used for community development, security audits, infrastructure maintenance, and ecosystem growth initiatives.",
    markets: "Join the DAO",
    viewProposals: "Proposals",
    openInRealms: "See all proposals",
    // Learn page translations
    learnTitle: "Learn",
    aiAssistant: "AI Assistant",
    aiWelcomeMessage:
      "Hello! I'm here to help you learn about cryptocurrency and The Stable Foundation. Ask me anything!",
    askPlaceholder: "Ask me about crypto or The Stable Foundation...",
    thinking: "Thinking...",
    aiDisclaimerMessage:
      "This is a demo AI assistant. Responses are simulated for educational purposes.",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    // Learn page translations
    tasksTitle: "Tasks",
    // FAQ questions and answers
    faqWhatIsStableFoundation: "What is The Stable Foundation?",
    faqWhatIsStableFoundationAnswer:
      "The Stable Foundation is a decentralized organization focused on creating stable, accessible financial infrastructure built on blockchain technology. Our mission is to provide transparent, community-driven financial tools that empower users worldwide.",
    faqWhatIsCryptocurrency: "What is cryptocurrency?",
    faqWhatIsCryptocurrencyAnswer:
      "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. It operates independently of traditional banking systems and enables peer-to-peer transactions without intermediaries.",
    faqWhatIsBlockchain: "What is a blockchain?",
    faqWhatIsBlockchainAnswer:
      "A blockchain is a distributed ledger technology that maintains a continuously growing list of records (blocks) linked and secured using cryptography. Each block contains transaction data, a timestamp, and a cryptographic hash of the previous block.",
    faqHowToKeepWalletSecure: "How do I keep my wallet secure?",
    faqHowToKeepWalletSecureAnswer:
      "Never share your private keys or seed phrases with anyone. Store your backup phrase in a secure, offline location. Use strong passwords and enable two-factor authentication when possible. Always verify transaction details before signing.",
    faqWhatAreTransactionFees: "What are transaction fees?",
    faqWhatAreTransactionFeesAnswer:
      "Transaction fees are small amounts paid to network validators for processing and confirming transactions on the blockchain. These fees help secure the network and prevent spam transactions.",
    faqWhatIsDao: "What is a DAO?",
    faqWhatIsDaoAnswer:
      "A DAO (Decentralized Autonomous Organization) is an organization governed by smart contracts and community voting rather than traditional management structures. Members can propose and vote on decisions that affect the organization.",
    faqHowToParticipateGovernance: "How do I participate in governance?",
    faqHowToParticipateGovernanceAnswer:
      "You can participate in governance by holding governance tokens, reviewing proposals, and casting votes on important decisions. Active participation helps shape the future direction of the foundation.",
    faqWhatIsDefi: "What is DeFi?",
    faqWhatIsDefiAnswer:
      "DeFi (Decentralized Finance) refers to financial services built on blockchain technology that operate without traditional intermediaries like banks. This includes lending, borrowing, trading, and earning yield on digital assets.",
    // Wallet specific translations
    walletTitle: "Wallet",
    switchKeypairTitle: "Switch Wallet",
    addressQrCode: "Scan Address",
    noKeypairsFound: "No wallets found",
    noSolWarningTitle: "No SOL balance",
    noSolWarningDescription:
      "You need SOL to pay transaction fee in the Solana blockchain.",
    account: "Account",
    active: "Active",
    assets: "Assets",
    activity: "Activity",
    transactionHistory: "Transaction History",
    viewWalletActivity: "View all wallet activity on NotWallet web",
    openInSolscan: "Open in NotWallet web",
    noAssetsFound: "No assets found",
    defaultUsername: "Wallet",
    pleaseSelectUsername: "Please enter a username",
    usernameTooLong: "Username too long (max 6 characters)",
    updateUsernameFailed: "Failed to update username",
    editWallet: "Edit Wallet",
    success: "Success!",
    username: "Username",
    maxCharacters: "max 6 characters",
    saving: "Saving...",
    pleaseEnterValidAmount: "Please enter a valid amount",
    pleaseSelectRecipient: "Please select or enter a recipient",
    failedToSendTokens: "Failed to send tokens",
    transactionCompletedSuccessfully: "Transaction completed successfully!",
    tokenType: "Token Type",
    amount: "Amount",
    available: "Available",
    recipient: "Recipient",
    enterCustomAddress: "Enter custom address",
    recipientAddress: "Recipient Address",
    enterRecipientPublicKey: "Enter recipient public key",
    customAddress: "Custom Address",
    sending: "Sending...",
    failedToGetQuote: "Failed to get swap quote",
    failedToSwap: "Failed to execute swap",
    swapTokens: "Swap Tokens",
    swapCompleted: "Swap completed successfully!",
    from: "From",
    to: "To",
    swapTokensTooltip: "Swap token positions",
    quoteDetails: "Quote Details",
    outputAmount: "Output Amount",
    fee: "Fee",
    priceImpact: "Price Impact",
    route: "Route",
    direct: "Direct",
    transactionReady: "Transaction Ready",
    blockHeight: "Block Height",
    priorityFee: "Priority Fee",
    computeUnits: "Compute Units",
    finalSlippage: "Final Slippage",
    executeSwap: "Execute Swap",
    getQuote: "Get Quote",
    insufficientBalance: "Insufficient balance",
    sendToken: "Send Token",
    simulationWarning: "Simulation Warning",
    buildNewTransaction: "Build New Transaction",
    slippage: "Slippage",
    slippagePercent: "0.1%",
    buildingTransaction: "Building Transaction...",
    prepareSwap: "Prepare Swap",
    toggleLockWallet: "Toggle lock wallet",
    walletSettings: "Wallet settings",
    copyPubkey: "Copy public key",
    switchKeypair: "Switch wallet",
    buySol: "Buy SOL",
    // Common actions
    cancel: "Cancel",
    save: "Save",
    // Wallet settings translations
    addWallet: "Add Wallet",
    createNew: "Create a new wallet",
    showSeedPhrase: "Show Seed Phrase",
    viewRecoveryPhrase: "View your recovery phrase",
    importExisting: "Import an existing wallet",
    network: "Network",
    management: "Wallet Management",
    importRecovery: "Import & Recovery",
    destroyWallets: "Destroy Wallets",
    destroyAllData: "This will permanently delete all wallet data",
    // Security translations
    securityNotice: "Security Notice",
    storeOffline: "Store your seed phrase in a secure, offline location",
    // Common UI
    dangerZone: "Danger Zone",
    irreversibleActions:
      "Irreversible actions that will permanently delete your data",
    // Finance translations
    send: "Send",
    swap: "Swap",
    balance: "Balance",
    // Lib components translations
    importSeedPhrase: "Import Seed Phrase",
    createNewWallet: "Create New Wallet",
    walletLocked: "Wallet Locked",
    enterPassword: "Enter Password",
    incorrectPassword: "Incorrect password. Please try again.",
    unlockWallet: "Unlock Wallet",
    notwalletCrypto: "NotWallet Crypto",
    createYourWallet: "Create Your Wallet",
    // Settings pages translations
    congratulations: "🎉 Congratulations! 🎉",
    congratulationsMessage:
      "You just found one of many ways to get the BACH Token airdrop. Send an email to info@bach.money with subject SETTINGS_EASTER_EGG and your wallet address in the email body.",
    gotIt: "Got it!",
    stableFoundationCopyright: "© {year} The Stable Foundation",
    easterEggFound: "Easter Egg Found!",
    easterEggDescription: "You discovered a hidden feature in the settings.",
    applicationInformation: "Application Information",
    version: "Version",
    installationId: "Installation ID",
    loading: "Loading",
    supportNote: "This information helps with support and debugging",
    preferences: "Preferences",
    theme: "Theme",
    chooseAppearance: "Choose your preferred appearance",
    system: "System",
    matchDevice: "Match your device settings",
    light: "Light",
    cleanBright: "Clean and bright interface",
    dark: "Dark",
    easyEyes: "Easy on the eyes",
    changesApplyImmediately: "Changes will apply immediately",
    language: "Language",
    selectLanguage: "Select Language",
    english: "English",
    indonesian: "Indonesian",
    // Common translations
    about: "About",
    appInfo: "App Info",
    appPreferences: "App Preferences",
    languagePreferences: "Language Preferences",
    app: "App",
    legalSupport: "Legal & Support",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    openSource: "Open Source",
    // About page translations
    aboutDescription:
      "A modern, community-owned, non-custodial open-source Solana wallet app built for privacy, simplicity, and security.",
    developedBy: "Developed and maintained by The Stable Foundation.",
    swedish: "Swedish",
    debug: "Debug",
  },
  sv: {
    appName: "NotWallet",
    home: "Hem",
    lessons: "Lektioner",
    settings: "Inställningar",
    wallet: "Plånbok",
    profile: "Profil",
    welcome: "Välkommen till NotWallet Crypto!",
    welcomePersonal: (name) => `Välkommen tillbaka, ${name}!`,
    homeDesc: "Ett roligt sätt att lära sig persiska.",
    getStarted: "Börja lära",
    startLesson: "Starta",
    back: "← Tillbaka",
    lessonCompleted: "Lektion klar! 🎉",
    user: "Användarnamn",
    guest: "Gäst",
    progress: "Framsteg",
    completed: "lektion(er) slutförda",
    question: "Fråga",
    of: "av",
    afterChoice: "Resultatet visas när du har valt.",
    correct: "Rätt!",
    incorrect: "Fel!",
    startThisLesson: "Starta lektionen",
    // Home page translations
    quickActions: "Snabbåtgärder",
    dao: "DAO",
    learn: "Lär dig",
    tasks: "Uppgifter",
    activityFeed: "Aktivitetsflöde",
    bachAirdropLive: "🪂 BACH Airdrop Live!",
    airdropDescription:
      "Flera sätt att tjäna dina BACH-tokens! Slutför uppgifter, bidra till musikdatabasen och delta i ekosystemet.",
    claimYourAirdrop: "Hämta din Airdrop →",
    claimYourBachAirdrop: "🎉 Hämta din $BACH Airdrop!",
    signUpAndClaim: "Registrera dig & Hämta",
    walletAddressUsedAirdrop:
      "Din plånboksadress kommer att användas för airdroppen.",
    bachMoney: "bach.money",
    successClaimedAirdrop: "🎊 Framgång! Du har hämtat din airdrop.",
    claimAirdrop: "Hämta Airdrop",
    signMessageProveOwnership:
      "Signera detta meddelande för att bevisa plånboksägande och hämta din airdrop.",
    signing: "Signerar...",
    signAndClaim: "Signera & Hämta",
    signatureOnlyForVerification:
      "Din signatur används endast för att verifiera din plånboksadress.",
    tryAgain: "Försök igen",
    setYourUsername: "👤 Ange ditt användarnamn",
    chooseUsernamePersonalize:
      "Välj ett användarnamn för att personifiera din plånbok.",
    enterYourUsername: "Ange ditt användarnamn",
    saveUsername: "Spara användarnamn",

    onboardingCreateWalletTitle: "Skapa Plånbok",
    onboardingImportWalletTitle: "Importera Plånbok",
    onboardingCreatePasswordTitle: "Skapa Lösenord",
    onboardingDisclaimerTitle: "Viktig Ansvarsfriskrivning",
    onboardingDisclaimerDesc1:
      "Du är på väg att skapa en självförvarad plånbok.",
    onboardingDisclaimerDesc2:
      "Du är den enda som kontrollerar din plånbok och dina medel.",
    onboardingDisclaimerDesc3:
      "Din seed-fras är det ENDA sättet att återställa din plånbok och tillgångar.",
    onboardingDisclaimerDesc4:
      "Om du förlorar din seed-fras, {red}kan dina medel inte återställas.",
    onboardingDisclaimerNonCustodial:
      "Detta är en icke-förvaringsplånbok. Endast du har tillgång till dina privata nycklar och medel.",
    onboardingContinue: "Fortsätt",
    onboardingUnderstandContinue: "Jag Förstår, Fortsätt",
    onboardingSetPasswordDesc:
      "Ange ett starkt lösenord för att skydda din plånbok.",
    onboardingPasswordRequired:
      "Detta lösenord krävs för att komma åt din plånbok på denna enhet.",
    onboardingPasswordMinLength: "Lösenordet måste vara minst 6 tecken.",
    onboardingPasswordMismatch: "Lösenorden matchar inte.",
    onboardingPasswordFoundTitle: "Lösenord Hittades",
    onboardingPasswordFoundDesc:
      "Ett lösenord finns redan för denna plånbok. Vill du använda det befintliga lösenordet eller skapa ett nytt?",
    onboardingUseExistingPassword: "Använd Befintligt Lösenord",
    onboardingCreateNewPassword: "Skapa Nytt Lösenord",
    onboardingImportSeedPhraseDesc:
      "Ange din 12- eller 24-ords seed-fras nedan för att importera din plånbok.",
    onboardingImportWalletButton: "Importera Plånbok",
    onboardingImportSuccess: "Import Lyckades!",
    onboardingImportWarning:
      "Se till att ingen tittar på din skärm. Dela aldrig din seed-fras med någon.",
    onboardingKeypairsTitle: "Importerade Nyckelpar",
    onboardingNoKeypairs: "Inga nyckelpar hittades.",
    onboardingGenerateNewAddress: "Generera Ny Adress",
    onboardingSavedSeedPhrase: "Jag har sparat min seed-fras",
    onboardingImportantDialogTitle: "Viktigt!",
    onboardingImportantDialogDesc:
      "Din seed-fras är det enda sättet att återställa din plånbok. Om du förlorar den kommer du att förlora åtkomsten till dina medel för alltid. Se till att du har sparat din seed-fras säkert innan du fortsätter.",
    errorOccurred: "Ett fel uppstod. Vänligen försök igen.",
    processing: "Bearbetar...",
    confirm: "Bekräfta",
    saved: "Sparat",
    usernameSavedSuccessfully: "Användarnamn sparat framgångsrikt!",
    oAuthLoginExplanation: "Claim with your Google account",
    googleOAuthLogin: "Login with Google",
    logout: "Loga ut",
    // DAO page translations
    daoTitle: "DAO",
    theStableFoundation: "The Stable Foundation",
    lockedDaoTokens: "Låsta DAO-tokens",
    treasury: "Treasury Wallet",
    treasuryBalances: "Treasury-saldon",
    viewOnExplorer: "Visa på Explorer",
    failedToLoadDaoBalance: "Misslyckades att ladda DAO-saldo",
    failedToLoadTreasuryBalances: "Misslyckades att ladda treasury-saldon",
    retry: "Försök igen",
    locked: "Låst",
    activeProposals: "Aktiva förslag",
    noActiveProposals: "Inga aktiva förslag för tillfället",
    failedToLoadProposals: "Misslyckades att ladda förslag",
    yesVotes: "Ja-röster",
    noVotes: "Nej-röster",
    ends: "Slutar",
    aboutTreasuryFees: "Om Treasury-avgifter",
    treasuryFeeDescription:
      "The Stable Foundation Treasury tar ut en avgift på 0,25% på alla transaktioner för att stödja utveckling och underhåll av NotWallet-Crypto-ekosystemet.",
    treasuryFundsUsage:
      "Dessa medel används för samhällsutveckling, säkerhetsrevisioner, infrastrukturunderhåll och ekosystemtillväxtinitiativ.",
    markets: "Joina DAOn",
    viewProposals: "Proposals",
    openInRealms: "See all proposals",
    // Learn page translations
    learnTitle: "Lär dig",
    aiAssistant: "AI-assistent",
    aiWelcomeMessage:
      "Hej! Jag är här för att hjälpa dig lära dig om kryptovaluta och The Stable Foundation. Fråga mig vad som helst!",
    askPlaceholder: "Fråga mig om krypto eller The Stable Foundation...",
    thinking: "Tänker...",
    aiDisclaimerMessage:
      "Detta är en demo AI-assistent. Svar simuleras för utbildningsändamål.",
    frequentlyAskedQuestions: "Vanliga frågor",
    // Learn page translations
    tasksTitle: "Uppgifter",
    // FAQ questions and answers
    faqWhatIsStableFoundation: "Vad är The Stable Foundation?",
    faqWhatIsStableFoundationAnswer:
      "The Stable Foundation är en decentraliserad organisation fokuserad på att skapa stabil, tillgänglig finansiell infrastruktur byggd på blockchain-teknik. Vårt uppdrag är att tillhandahålla transparenta, gemenskapsdrivna finansiella verktyg som stärker användare världen över.",
    faqWhatIsCryptocurrency: "Vad är kryptovaluta?",
    faqWhatIsCryptocurrencyAnswer:
      "Kryptovaluta är en digital eller virtuell form av valuta som använder kryptografi för säkerhet. Den fungerar oberoende av traditionella banksystem och möjliggör peer-to-peer-transaktioner utan mellanhänder.",
    faqWhatIsBlockchain: "Vad är en blockchain?",
    faqWhatIsBlockchainAnswer:
      "En blockchain är en distribuerad redovisningsteknik som upprätthåller en kontinuerligt växande lista över poster (block) länkade och säkrade med kryptografi. Varje block innehåller transaktionsdata, en tidsstämpel och ett kryptografiskt hash av föregående block.",
    faqHowToKeepWalletSecure: "Hur håller jag min plånbok säker?",
    faqHowToKeepWalletSecureAnswer:
      "Dela aldrig dina privata nycklar eller fröfraser med någon. Förvara din säkerhetskopieringsfras på en säker, offline-plats. Använd starka lösenord och aktivera tvåfaktorsautentisering när det är möjligt. Verifiera alltid transaktionsdetaljer innan du signerar.",
    faqWhatAreTransactionFees: "Vad är transaktionsavgifter?",
    faqWhatAreTransactionFeesAnswer:
      "Transaktionsavgifter är små belopp som betalas till nätverksvalidatorer för att bearbeta och bekräfta transaktioner på blockchain. Dessa avgifter hjälper till att säkra nätverket och förhindra spam-transaktioner.",
    faqWhatIsDao: "Vad är en DAO?",
    faqWhatIsDaoAnswer:
      "En DAO (Decentraliserad Autonom Organisation) är en organisation som styrs av smarta kontrakt och gemenskapsröstning snarare än traditionella ledningsstrukturer. Medlemmar kan föreslå och rösta på beslut som påverkar organisationen.",
    faqHowToParticipateGovernance: "Hur deltar jag i styrning?",
    faqHowToParticipateGovernanceAnswer:
      "Du kan delta i styrning genom att hålla styrnings-tokens, granska förslag och avge röster på viktiga beslut. Aktivt deltagande hjälper till att forma framtida riktning för stiftelsen.",
    faqWhatIsDefi: "Vad är DeFi?",
    faqWhatIsDefiAnswer:
      "DeFi (Decentraliserad Finans) hänvisar till finansiella tjänster byggda på blockchain-teknik som fungerar utan traditionella mellanhänder som banker. Detta inkluderar utlåning, upplåning, handel och avkastning på digitala tillgångar.",
    // Wallet specific translations
    walletTitle: "Plånbok",
    switchKeypairTitle: "Byt plånbok",
    addressQrCode: "Skanningsadress",
    noKeypairsFound: "Inga plånböcker hittades",
    noSolWarningTitle: "Ingen SOL balans",
    noSolWarningDescription:
      "Du behöver SOL för att betala transaktionsavgiften i Solana blockkedjan.",
    account: "Konto",
    active: "Aktiv",
    assets: "Tillgångar",
    activity: "Aktivitet",
    transactionHistory: "Transaktionshistorik",
    viewWalletActivity: "Visa all plånboksaktivitet på NotWallet web",
    openInSolscan: "Öppna i NotWallet web",
    noAssetsFound: "Inga tillgångar hittades",
    defaultUsername: "Plånbok",
    pleaseSelectUsername: "Ange ett användarnamn",
    usernameTooLong: "Användarnamnet för långt (max 6 tecken)",
    updateUsernameFailed: "Misslyckades att uppdatera användarnamn",
    editWallet: "Redigera plånbok",
    success: "Framgång!",
    username: "Användarnamn",
    maxCharacters: "max 6 tecken",
    saving: "Sparar...",
    pleaseEnterValidAmount: "Ange ett giltigt belopp",
    pleaseSelectRecipient: "Välj eller ange en mottagare",
    failedToSendTokens: "Misslyckades att skicka tokens",
    transactionCompletedSuccessfully: "Transaktion slutförd framgångsrikt!",
    tokenType: "Token-typ",
    amount: "Belopp",
    available: "Tillgängligt",
    recipient: "Mottagare",
    enterCustomAddress: "Ange anpassad adress",
    recipientAddress: "Mottagaradress",
    enterRecipientPublicKey: "Ange mottagarens publika nyckel",
    customAddress: "Anpassad adress",
    sending: "Skickar...",
    failedToGetQuote: "Misslyckades att få swap-offert",
    failedToSwap: "Misslyckades att utföra swap",
    swapTokens: "Swappa tokens",
    swapCompleted: "Swap slutförd framgångsrikt!",
    from: "Från",
    to: "Till",
    swapTokensTooltip: "Swappa token-positioner",
    quoteDetails: "Offertdetaljer",
    outputAmount: "Utdatabelopp",
    fee: "Avgift",
    priceImpact: "Prispåverkan",
    route: "Rutt",
    direct: "Direkt",
    transactionReady: "Transaktion klar",
    blockHeight: "Blockhöjd",
    priorityFee: "Prioritetsavgift",
    computeUnits: "Beräkningsenheter",
    finalSlippage: "Slutlig glidning",
    executeSwap: "Utför swap",
    getQuote: "Få offert",
    insufficientBalance: "Otillräckligt saldo",
    sendToken: "Skicka Token",
    simulationWarning: "Simuleringsvarning",
    buildNewTransaction: "Bygg ny transaktion",
    slippage: "Glidning",
    slippagePercent: "0,1%",
    buildingTransaction: "Bygger transaktion...",
    prepareSwap: "Förbered swap",
    toggleLockWallet: "Växla låsning av plånbok",
    walletSettings: "Plånboksinställningar",
    copyPubkey: "Kopiera publik nyckel",
    switchKeypair: "Byt plånbok",
    buySol: "Köp SOL",
    // Common actions
    cancel: "Avbryt",
    save: "Spara",
    // Wallet settings translations
    addWallet: "Lägg till plånbok",
    createNew: "Skapa en ny plånbok",
    showSeedPhrase: "Visa fröfras",
    viewRecoveryPhrase: "Visa din återställningsfras",
    importExisting: "Importera en befintlig plånbok",
    network: "Natverk",
    management: "Plånbokshantering",
    importRecovery: "Import & återställning",
    destroyWallets: "Förstör plånböcker",
    destroyAllData: "Detta kommer permanent ta bort all plånboksdata",
    // Security translations
    securityNotice: "Säkerhetsmeddelande",
    storeOffline: "Förvara din fröfras på en säker, offline-plats",
    // Common UI
    dangerZone: "Farlig zon",
    irreversibleActions:
      "Irreversibla åtgärder som permanent tar bort din data",
    // Finance translations
    send: "Skicka",
    swap: "Swappa",
    balance: "Saldo",
    // Lib components translations
    importSeedPhrase: "Importera fröfras",
    createNewWallet: "Skapa ny plånbok",
    walletLocked: "Plånbok låst",
    enterPassword: "Ange lösenord",
    incorrectPassword: "Felaktigt lösenord. Försök igen.",
    unlockWallet: "Lås upp plånbok",
    notwalletCrypto: "NotWallet Crypto",
    createYourWallet: "Skapa din plånbok",
    // Settings pages translations
    congratulations: "🎉 Grattis! 🎉",
    congratulationsMessage:
      "Du hittade ett av många sätt att få BACH Token airdrop. Skicka ett e-postmeddelande till info@bach.money med ämne SETTINGS_EASTER_EGG och din plånboksadress i e-postmeddelandets brödtext.",
    gotIt: "Förstått!",
    stableFoundationCopyright: "© {year} The Stable Foundation",
    easterEggFound: "Påskägg funnet!",
    easterEggDescription: "Du upptäckte en dold funktion i inställningarna.",
    applicationInformation: "Applikationsinformation",
    version: "Version",
    installationId: "Installations-ID",
    loading: "Laddar",
    supportNote: "Denna information hjälper med support och felsökning",
    preferences: "Inställningar",
    theme: "Tema",
    chooseAppearance: "Välj din föredragna utseende",
    system: "System",
    matchDevice: "Matcha dina enhetsinställningar",
    light: "Ljus",
    cleanBright: "Rent och ljust gränssnitt",
    dark: "Mörk",
    easyEyes: "Lätt för ögonen",
    changesApplyImmediately: "Ändringar tillämpas omedelbart",
    language: "Språk",
    selectLanguage: "Välj språk",
    english: "Engelska",
    indonesian: "Indonesiska",
    // Common translations
    about: "Om",
    appInfo: "App Info",
    appPreferences: "App Preferences",
    languagePreferences: "Language Preferences",
    app: "App",
    legalSupport: "Juridik & Support",
    termsOfService: "Användarvillkor",
    privacyPolicy: "Integritetspolicy",
    openSource: "Öppen källkod",
    // About page translations
    aboutDescription:
      "En modern, gemenskapsägd, icke-förvaringsbaserad open-source Solana-plånboksapp byggd för integritet, enkelhet och säkerhet.",
    developedBy: "Utvecklad och underhållen av The Stable Foundation.",
    swedish: "Svenska",
    debug: "Debug",
  },
  id: {
    appName: "NotWallet",
    home: "Beranda",
    lessons: "Pelajaran",
    settings: "Pengaturan",
    wallet: "Dompet",
    profile: "Profil",
    welcome: "Selamat datang di NotWallet Crypto!",
    welcomePersonal: (name) => `Selamat datang kembali, ${name}!`,
    homeDesc: "Cara yang menyenangkan untuk belajar bahasa Persia.",
    getStarted: "Mulai Belajar",
    startLesson: "Mulai",

    onboardingCreateWalletTitle: "Buat Dompet",
    onboardingImportWalletTitle: "Impor Dompet",
    onboardingCreatePasswordTitle: "Buat Kata Sandi",
    onboardingDisclaimerTitle: "Disclaimer Penting",
    onboardingDisclaimerDesc1: "Anda akan membuat dompet self-custody.",
    onboardingDisclaimerDesc2:
      "Anda adalah satu-satunya yang mengontrol dompet dan dana Anda.",
    onboardingDisclaimerDesc3:
      "Frasa benih Anda adalah SATU-SATUNYA cara untuk memulihkan dompet dan aset Anda.",
    onboardingDisclaimerDesc4:
      "Jika Anda kehilangan frasa benih, {red}dana Anda tidak dapat dipulihkan.",
    onboardingDisclaimerNonCustodial:
      "Ini adalah dompet non-kustodian. Hanya Anda yang memiliki akses ke kunci privat dan dana Anda.",
    onboardingContinue: "Lanjutkan",
    onboardingUnderstandContinue: "Saya Mengerti, Lanjutkan",
    onboardingSetPasswordDesc:
      "Buat kata sandi yang kuat untuk melindungi dompet Anda.",
    onboardingPasswordRequired:
      "Kata sandi ini diperlukan untuk mengakses dompet Anda di perangkat ini.",
    onboardingPasswordMinLength: "Kata sandi harus minimal 6 karakter.",
    onboardingPasswordMismatch: "Kata sandi tidak cocok.",
    onboardingPasswordFoundTitle: "Kata Sandi Ditemukan",
    onboardingPasswordFoundDesc:
      "Kata sandi sudah ada untuk dompet ini. Apakah Anda ingin menggunakan kata sandi yang ada atau membuat yang baru?",
    onboardingUseExistingPassword: "Gunakan Kata Sandi yang Ada",
    onboardingCreateNewPassword: "Buat Kata Sandi Baru",
    onboardingImportSeedPhraseDesc:
      "Masukkan frasa benih 12 atau 24 kata Anda di bawah untuk mengimpor dompet Anda.",
    onboardingImportWalletButton: "Impor Dompet",
    onboardingImportSuccess: "Impor Berhasil!",
    onboardingImportWarning:
      "Pastikan tidak ada yang melihat layar Anda. Jangan pernah membagikan frasa benih Anda kepada siapa pun.",
    onboardingKeypairsTitle: "Keypair yang Diimpor",
    onboardingNoKeypairs: "Tidak ada keypair ditemukan.",
    onboardingGenerateNewAddress: "Buat Alamat Baru",
    onboardingSavedSeedPhrase: "Saya sudah menyimpan frasa benih saya",
    onboardingImportantDialogTitle: "Penting!",
    onboardingImportantDialogDesc:
      "Frasa benih Anda adalah satu-satunya cara untuk memulihkan dompet Anda. Jika Anda kehilangannya, Anda akan kehilangan akses ke dana Anda selamanya. Pastikan Anda telah menyimpan frasa benih Anda dengan aman sebelum melanjutkan.",
    errorOccurred: "Terjadi kesalahan. Silakan coba lagi.",
    processing: "Memproses...",
    confirm: "Konfirmasi",
    back: "← Kembali",
    lessonCompleted: "Pelajaran Selesai! 🎉",
    user: "Nama Pengguna",
    guest: "Tamu",
    progress: "Kemajuan",
    completed: "pelajaran selesai",
    question: "Pertanyaan",
    of: "dari",
    afterChoice: "Hasil akan ditampilkan setelah Anda memilih.",
    correct: "Benar!",
    incorrect: "Salah!",
    startThisLesson: "Mulai Pelajaran",
    // Home page translations
    quickActions: "Aksi Cepat",
    dao: "DAO",
    learn: "Belajar",
    tasks: "Tugas",
    activityFeed: "Feed Aktivitas",
    bachAirdropLive: "🪂 Airdrop BACH Live!",
    airdropDescription:
      "Berbagai cara untuk mendapatkan token BACH Anda! Selesaikan tugas, berkontribusi pada database musik, dan berpartisipasi dalam ekosistem.",
    claimYourAirdrop: "Klaim Airdrop Anda →",
    claimYourBachAirdrop: "🎉 Klaim Airdrop $BACH Anda!",
    signUpAndClaim: "Daftar & Klaim",
    walletAddressUsedAirdrop:
      "Alamat dompet Anda akan digunakan untuk airdrop.",
    bachMoney: "bach.money",
    successClaimedAirdrop: "🎊 Berhasil! Anda telah mengklaim airdrop Anda.",
    claimAirdrop: "Klaim Airdrop",
    signMessageProveOwnership:
      "Tanda tangani pesan ini untuk membuktikan kepemilikan dompet dan klaim airdrop Anda.",
    signing: "Menandatangani...",
    signAndClaim: "Tanda Tangan & Klaim",
    signatureOnlyForVerification:
      "Tanda tangan Anda hanya digunakan untuk memverifikasi alamat dompet Anda.",
    tryAgain: "Coba Lagi",
    setYourUsername: "👤 Atur Nama Pengguna Anda",
    chooseUsernamePersonalize:
      "Pilih nama pengguna untuk mempersonalisasi dompet Anda.",
    enterYourUsername: "Masukkan nama pengguna Anda",
    saveUsername: "Simpan Nama Pengguna",
    saved: "Tersimpan",
    usernameSavedSuccessfully: "Nama pengguna berhasil disimpan!",
    oAuthLoginExplanation: "Klaim dengan akun Google kamu",
    googleOAuthLogin: "Masuk dengan Google",
    logout: "Keluar",
    // DAO page translations
    daoTitle: "DAO",
    theStableFoundation: "The Stable Foundation",
    lockedDaoTokens: "Token DAO Terkunci",
    treasury: "Dompet Perbendaharaan",
    treasuryBalances: "Saldo Perbendaharaan",
    viewOnExplorer: "Lihat di Explorer",
    failedToLoadDaoBalance: "Gagal memuat saldo DAO",
    failedToLoadTreasuryBalances: "Gagal memuat saldo perbendaharaan",
    retry: "Coba Lagi",
    locked: "Terkunci",
    activeProposals: "Proposal Aktif",
    noActiveProposals: "Tidak ada proposal aktif saat ini",
    failedToLoadProposals: "Gagal memuat proposal",
    yesVotes: "Suara Ya",
    noVotes: "Suara Tidak",
    ends: "Berakhir",
    aboutTreasuryFees: "Tentang Biaya Perbendaharaan",
    treasuryFeeDescription:
      "Perbendaharaan The Stable Foundation mengenakan biaya 0,25% pada semua transaksi untuk mendukung pengembangan dan pemeliharaan ekosistem NotWallet Crypto.",
    treasuryFundsUsage:
      "Dana ini digunakan untuk pengembangan komunitas, audit keamanan, pemeliharaan infrastruktur, dan inisiatif pertumbuhan ekosistem.",
    markets: "Gabung DAO",
    viewProposals: "Proposal",
    openInRealms: "Lihat semua proposal",
    // Learn page translations
    learnTitle: "Belajar",
    aiAssistant: "Asisten AI",
    aiWelcomeMessage:
      "Halo! Saya di sini untuk membantu Anda belajar tentang cryptocurrency dan The Stable Foundation. Tanyakan apa saja!",
    askPlaceholder: "Tanya saya tentang crypto atau The Stable Foundation...",
    thinking: "Berpikir...",
    aiDisclaimerMessage:
      "Ini adalah asisten AI demo. Respons disimulasikan untuk tujuan edukasi.",
    frequentlyAskedQuestions: "Pertanyaan yang Sering Diajukan",
    // Learn page translations
    tasksTitle: "Tugas",
    // FAQ questions and answers
    faqWhatIsStableFoundation: "Apa itu The Stable Foundation?",
    faqWhatIsStableFoundationAnswer:
      "The Stable Foundation adalah organisasi terdesentralisasi yang fokus pada penciptaan infrastruktur keuangan yang stabil dan dapat diakses yang dibangun di atas teknologi blockchain. Misi kami adalah menyediakan alat keuangan yang transparan dan didorong oleh komunitas yang memberdayakan pengguna di seluruh dunia.",
    faqWhatIsCryptocurrency: "Apa itu cryptocurrency?",
    faqWhatIsCryptocurrencyAnswer:
      "Cryptocurrency adalah bentuk mata uang digital atau virtual yang menggunakan kriptografi untuk keamanan. Ini beroperasi secara independen dari sistem perbankan tradisional dan memungkinkan transaksi peer-to-peer tanpa perantara.",
    faqWhatIsBlockchain: "Apa itu blockchain?",
    faqWhatIsBlockchainAnswer:
      "Blockchain adalah teknologi buku besar terdistribusi yang memelihara daftar catatan yang terus berkembang (blok) yang terhubung dan diamankan menggunakan kriptografi. Setiap blok berisi data transaksi, timestamp, dan hash kriptografis dari blok sebelumnya.",
    faqHowToKeepWalletSecure: "Bagaimana cara menjaga keamanan dompet saya?",
    faqHowToKeepWalletSecureAnswer:
      "Jangan pernah berbagi kunci pribadi atau frasa seed Anda dengan siapa pun. Simpan frasa cadangan Anda di tempat yang aman dan offline. Gunakan kata sandi yang kuat dan aktifkan autentikasi dua faktor jika memungkinkan. Selalu verifikasi detail transaksi sebelum menandatangani.",
    faqWhatAreTransactionFees: "Apa itu biaya transaksi?",
    faqWhatAreTransactionFeesAnswer:
      "Biaya transaksi adalah jumlah kecil yang dibayarkan kepada validator jaringan untuk memproses dan mengkonfirmasi transaksi di blockchain. Biaya ini membantu mengamankan jaringan dan mencegah transaksi spam.",
    faqWhatIsDao: "Apa itu DAO?",
    faqWhatIsDaoAnswer:
      "DAO (Organisasi Otonom Terdesentralisasi) adalah organisasi yang diatur oleh kontrak pintar dan voting komunitas daripada struktur manajemen tradisional. Anggota dapat mengusulkan dan memilih keputusan yang mempengaruhi organisasi.",
    faqHowToParticipateGovernance:
      "Bagaimana cara berpartisipasi dalam tata kelola?",
    faqHowToParticipateGovernanceAnswer:
      "Anda dapat berpartisipasi dalam tata kelola dengan memegang token tata kelola, meninjau proposal, dan memberikan suara pada keputusan penting. Partisipasi aktif membantu membentuk arah masa depan yayasan.",
    faqWhatIsDefi: "Apa itu DeFi?",
    faqWhatIsDefiAnswer:
      "DeFi (Keuangan Terdesentralisasi) mengacu pada layanan keuangan yang dibangun di atas teknologi blockchain yang beroperasi tanpa perantara tradisional seperti bank. Ini termasuk pinjam-meminjam, perdagangan, dan memperoleh yield pada aset digital.",
    // Wallet specific translations
    walletTitle: "Dompet",
    switchKeypairTitle: "Ganti Dompet",
    addressQrCode: "Scan Alamat Dompet",
    noKeypairsFound: "Tidak ada dompet ditemukan",
    noSolWarningTitle: "Tidak ada SOL",
    noSolWarningDescription:
      "Anda memerlukan SOL untuk membayar biaya transaksi di blockchain Solana.",
    account: "Akun",
    active: "Aktif",
    assets: "Aset",
    activity: "Aktivitas",
    transactionHistory: "Riwayat Transaksi",
    viewWalletActivity: "Lihat semua aktivitas dompet di NotWallet web",
    openInSolscan: "Buka di NotWallet web",
    noAssetsFound: "Tidak ada aset ditemukan",
    defaultUsername: "Dompet",
    pleaseSelectUsername: "Silakan masukkan nama pengguna",
    usernameTooLong: "Nama pengguna terlalu panjang (maks 6 karakter)",
    updateUsernameFailed: "Gagal memperbarui nama pengguna",
    editWallet: "Edit Dompet",
    success: "Berhasil!",
    username: "Nama Pengguna",
    maxCharacters: "maks 6 karakter",
    saving: "Menyimpan...",
    pleaseEnterValidAmount: "Silakan masukkan jumlah yang valid",
    pleaseSelectRecipient: "Silakan pilih atau masukkan penerima",
    failedToSendTokens: "Gagal mengirim token",
    transactionCompletedSuccessfully: "Transaksi berhasil diselesaikan!",
    tokenType: "Jenis Token",
    amount: "Jumlah",
    available: "Tersedia",
    recipient: "Penerima",
    enterCustomAddress: "Masukkan alamat khusus",
    recipientAddress: "Alamat Penerima",
    enterRecipientPublicKey: "Masukkan kunci publik penerima",
    customAddress: "Alamat Khusus",
    sending: "Mengirim...",
    failedToGetQuote: "Gagal mendapatkan kutipan swap",
    failedToSwap: "Gagal melakukan swap",
    swapTokens: "Tukar Token",
    swapCompleted: "Swap berhasil diselesaikan!",
    from: "Dari",
    to: "Ke",
    swapTokensTooltip: "Tukar posisi token",
    quoteDetails: "Detail Kutipan",
    outputAmount: "Jumlah Output",
    fee: "Biaya",
    priceImpact: "Dampak Harga",
    route: "Rute",
    direct: "Langsung",
    transactionReady: "Transaksi Siap",
    blockHeight: "Tinggi Blok",
    priorityFee: "Biaya Prioritas",
    computeUnits: "Unit Komputasi",
    finalSlippage: "Slippage Akhir",
    executeSwap: "Jalankan Swap",
    getQuote: "Dapatkan Kutipan",
    insufficientBalance: "Saldo tidak mencukupi",
    sendToken: "Kirim Token",
    simulationWarning: "Peringatan Simulasi",
    buildNewTransaction: "Buat Transaksi Baru",
    slippage: "Slippage",
    slippagePercent: "0,1%",
    buildingTransaction: "Membangun Transaksi...",
    prepareSwap: "Persiapkan Swap",
    toggleLockWallet: "Alihkan kunci dompet",
    walletSettings: "Pengaturan dompet",
    copyPubkey: "Salin kunci publik",
    switchKeypair: "Ganti dompet",
    buySol: "Beli SOL",
    // Common actions
    cancel: "Batal",
    save: "Simpan",
    // Wallet settings translations
    addWallet: "Tambah Dompet",
    createNew: "Buat dompet baru",
    showSeedPhrase: "Tampilkan Frasa Seed",
    viewRecoveryPhrase: "Lihat frasa pemulihan Anda",
    importExisting: "Impor dompet yang ada",
    network: "Jaringan",
    management: "Manajemen Dompet",
    importRecovery: "Impor & Pemulihan",
    destroyWallets: "Hancurkan Dompet",
    destroyAllData: "Ini akan menghapus semua data dompet secara permanen",
    // Security translations
    securityNotice: "Pemberitahuan Keamanan",
    storeOffline: "Simpan frasa seed Anda di lokasi yang aman dan offline",
    // Common UI
    dangerZone: "Zona Berbahaya",
    irreversibleActions:
      "Tindakan yang tidak dapat dibatalkan yang akan menghapus data Anda secara permanen",
    // Finance translations
    send: "Kirim",
    swap: "Tukar",
    balance: "Saldo",
    // Lib components translations
    importSeedPhrase: "Impor Frasa Benih",
    createNewWallet: "Buat Dompet Baru",
    walletLocked: "Dompet Terkunci",
    enterPassword: "Masukkan Kata Sandi",
    incorrectPassword: "Kata sandi salah. Silakan coba lagi.",
    unlockWallet: "Buka Kunci Dompet",
    notwalletCrypto: "NotWallet Crypto",
    createYourWallet: "Buat Dompet Anda",
    // Settings pages translations
    congratulations: "🎉 Selamat! 🎉",
    congratulationsMessage:
      "Anda baru saja menemukan salah satu dari banyak cara untuk mendapatkan airdrop Token BACH. Kirim email ke info@bach.money dengan subjek SETTINGS_EASTER_EGG dan alamat dompet Anda di badan email.",
    gotIt: "Mengerti!",
    stableFoundationCopyright: "© {year} The Stable Foundation",
    easterEggFound: "Easter Egg Ditemukan!",
    easterEggDescription: "Anda menemukan fitur tersembunyi di pengaturan.",
    applicationInformation: "Informasi Aplikasi",
    version: "Versi",
    installationId: "ID Instalasi",
    loading: "Memuat",
    supportNote: "Informasi ini membantu dukungan dan debugging",
    preferences: "Preferensi",
    theme: "Tema",
    chooseAppearance: "Pilih tampilan yang Anda sukai",
    system: "Sistem",
    matchDevice: "Sesuaikan dengan pengaturan perangkat",
    light: "Terang",
    cleanBright: "Antarmuka yang bersih dan cerah",
    dark: "Gelap",
    easyEyes: "Nyaman untuk mata",
    changesApplyImmediately: "Perubahan akan diterapkan segera",
    language: "Bahasa",
    selectLanguage: "Pilih Bahasa",
    english: "Bahasa Inggris",
    indonesian: "Bahasa Indonesia",
    // Common translations
    about: "Tentang",
    appInfo: "Info Aplikasi",
    appPreferences: "Preferensi Aplikasi",
    languagePreferences: "Preferensi Bahasa",
    app: "Aplikasi",
    legalSupport: "Legal & Dukungan",
    termsOfService: "Syarat Layanan",
    privacyPolicy: "Kebijakan Privasi",
    openSource: "Sumber Terbuka",
    // About page translations
    aboutDescription:
      "Aplikasi dompet Solana open-source modern yang dimiliki komunitas, non-custodial yang dibangun untuk privasi, kesederhanaan, dan keamanan.",
    developedBy: "Dikembangkan dan dikelola oleh The Stable Foundation.",
    swedish: "Bahasa Swedia",
    debug: "Debug",
  },
};
