import React from 'react';
import Navbar from "../shared/header/Navbar";
import Footer from "../shared/footer/Footer";
import Sections from "./parts/Sections";
import Tabs from "../account/parts/Tabs";
import SlideDown from "react-slidedown";
import 'react-slidedown/lib/slidedown.css'
import {Link} from "react-router-dom";

// Resources
import arrowGray from "../../assets/img/arrow1.svg";
import arrowGrayHover from "../../assets/img/arrow4.svg";


export default class Faq extends React.Component {
    constructor() {
        super();
        this.changeTab = this.changeTab.bind(this);
        this.state = {
            activeTab: '0',
            activeAnswer: '11'
        }
    }
    
    
    changeTab(e) {
        const newTab = e.target.getAttribute("data-tab");
        this.setState({
            activeTab : newTab
        });
    }
    toggleQuestion(id) {
        if (this.state.activeAnswer === id) {
            id = '';
        }
        this.setState({
            activeAnswer : id
        });
    }
    
    render() {
        return (
            <div>
                <Navbar { ...this.props } />
                <div className="bck-gray pt-5">
                    <div className="container">
                        <div className="row flex-md-row account-bids">
                            <Sections changeTab={this.changeTab} activeTab={ this.state.activeTab } tabs={['All', 'My bids', 'Owned by me']} />
                            <div className="col col-custom-1 py-5 pl-lg-5 my-lg-5 w-100">
                                <div className="empty-space-60" />
                                <div className="faq-wrapper">
                                    <div className={"section " + ( this.state.activeTab === '0' ? 'active' : '' )}>
                                        <h4 className="big mb-5">About us</h4>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '11' ? 'active' : '')} onClick={() => this.toggleQuestion('11')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" /> Who is Stephen Wolfram?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '11' ?
                                                    <div className="answer">
                                                        <p className="mb-0">Stephen Wolfram is the creator of Mathematica, Wolfram|Alpha and the Wolfram Language; the author of A New Kind of Science; the originator of the Wolfram Physics Project; and the founder and CEO of Wolfram Research.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '12' ? 'active' : '')} onClick={() => this.toggleQuestion('12')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is Wolfram Blockchain Labs?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '12' ?
                                                    <div className="answer">
                                                        <p>Wolfram Blockchain Labs (WBL) is a subsidiary of Wolfram Research exclusively licensed with powerful Wolfram blockchain technologies and specifically designed to extend ecosystem tools for application development for DLTs. WBL mission is to enable blockchain-based commerce and business model innovation.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '13' ? 'active' : '')} onClick={() => this.toggleQuestion('13')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is Cellular Automaton?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '13' ?
                                                    <div className="answer">
                                                        <p>A cellular automaton is a discrete computational system where many identical cells on a lattice update their value according to a local and constant rule of evolution based on the states of neighboring cells. The rule is applied iteratively for as many time steps as desired. Cellular automata have been shown to exhibit diverse behaviors, including chaos and complexity.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '14' ? 'active' : '')} onClick={() => this.toggleQuestion('14')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What are the Notable Universe Models?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '14' ?
                                                    <div className="answer">
                                                        <p>A Wolfram model is a simple and structureless collection of abstract relations between abstract elements. We can think of it as a hypergraph—or, in simple cases, a graph. When we apply simple transformation rules over and over again, we can get something that looks really complicated. Now, if we ignore all matter in the universe, our universe is basically a big chunk of space and that can be a whole bunch of what are essentially abstract points, abstractly connected together. So, it is possible that there is an actual rule that represents our universe. The Notable Universe Models is a collection of Wolfram models exhibiting interesting properties, studied under the scope of the Wolfram Physics Project with the hope of finding the rule that represents our universe.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                    </div>
                                    <div className={"section " + ( this.state.activeTab === '1' ? 'active' : '' )}>
                                        <h4 className="big mb-5">Technology</h4>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '21' ? 'active' : '')} onClick={() => this.toggleQuestion('21')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is Blockchain?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '21' ?
                                                    <div className="answer">
                                                        <p>Blockchain technology, otherwise known as distributed ledger technology (DLT), provides a decentralized and accessible data structure for various records. Such data structure, or ledger, keeps immutable records of financial payment and transaction details, created assets, or smart contract deals.<br/><br/>As a blockchain stores data in a decentralized manner, it is independent of centralized, controlling entities, or middlemen. This provides enhanced transparency of data storage and its management. An important feature of blockchain is that it stores records immutably, which means that they cannot be changed, forged, or deleted.<br/><br/>Blockchains not only provide an immutable and secure database but also act as a functional environment to transact funds, create digital currencies, and process complex deals using digital agreements (smart contracts).</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '22' ? 'active' : '')} onClick={() => this.toggleQuestion('22')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is an NFT?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '22' ?
                                                    <div className="answer">
                                                        <p>A non-fungible token (NFT) is a  unique digital asset that is created on a blockchain and represents specific information (IP rights, or collectibles, for example). An NFT acts as one unit that cannot be divided into smaller fractions.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '23' ? 'active' : '')} onClick={() => this.toggleQuestion('23')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is Cardano?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '23' ?
                                                    <div className="answer">
                                                        <p>Cardano is a decentralized third-generation proof-of-stake blockchain platform and home to ada cryptocurrency. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach.<br/><br/>The Cardano platform has been designed from the ground up and verified by an industry-leading combination of top engineers and academic experts in the fields of blockchain and cryptography. It has a strong focus on sustainability, scalability, and transparency. As a fully open-source project, Cardano aims to deliver an inclusive, fair, and resilient infrastructure for financial and social applications on a global scale.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                    </div>
                                    <div className={"section " + ( this.state.activeTab === '2' ? 'active' : '' )}>
                                        <h4 className="big mb-5">Wallets and ada</h4>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '31' ? 'active' : '')} onClick={() => this.toggleQuestion('31')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is ada?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '31' ?
                                                    <div className="answer">
                                                        <p>Ada is the native, digital currency of the Cardano blockchain. It can be used for payments, transactions, and fees on Cardano.<br/>Ada is also the cryptocurrency accepted for bidding on Wolfram NFTs.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '32' ? 'active' : '')} onClick={() => this.toggleQuestion('32')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is a wallet?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '32' ?
                                                    <div className="answer">
                                                        <p>A cryptocurrency wallet is a safe and secure place where users can keep their digital currencies.<br/>Remember, only a wallet that you have private keys to (a password that provides access to your cryptocurrency) is considered to be safe to store your personal funds. It is highly not recommended to store cryptocurrency on exchanges, as this increases the risk of funds loss</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '33' ? 'active' : '')} onClick={() => this.toggleQuestion('33')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />Which wallet can I use?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '33' ?
                                                    <div className="answer">
                                                        <p>You will need a wallet funded with ada in order to be able to fund your account.<br/><br/>We recommend using only official Cardano wallets developed for storing, transacting, and delegating with ada cryptocurrency (<Link to="https://daedaluswallet.io/" target="_blank" className="hover-effect-1">Daedalus</Link> and <Link to="https://yoroi-wallet.com/#/" target="_blank" className="hover-effect-1">Yoroi</Link>). Some hardware wallets also support ada (e.g. Trezor Model T, Ledger Nano S, Ledger Nano X).</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '34' ? 'active' : '')} onClick={() => this.toggleQuestion('34')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />How can I make a deposit?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '34' ?
                                                    <div className="answer">
                                                        <p>To make  a deposit, go to My Account >Balance > Make deposit<br/>You will need to decide the desired  amount of ada to deposit. Make sure you have sufficient funds (ada) in your personal wallet</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '35' ? 'active' : '')} onClick={() => this.toggleQuestion('35')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What happens if I don’t have enough ada?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '35' ?
                                                    <div className="answer">
                                                        <p>If you don’t have enough ada to participate in an auction, you will need to deposit more in order to be able to bid. See ‘How can I make a deposit’?</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '36' ? 'active' : '')} onClick={() => this.toggleQuestion('36')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />How can I buy ada?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '36' ?
                                                    <div className="answer">
                                                        <p>Like any other cryptocurrency, ada can be purchased using one of the available exchanges.<br/><br/>We do not recommend any particular exchange, as there are many great options. However, you can find a <Link to="https://coinmarketcap.com/currencies/cardano/markets/" target="_blank" className="hover-effect-1">list of exchanges listing ADA on Cardano markets</Link>.</p>
                                                        <h6><span>Step 1: Download a wallet</span></h6>
                                                        <ol>
                                                            <li>First, you need to download and install a cryptocurrency wallet that supports ada.</li>
                                                            <li>Create a new wallet and name it.</li>
                                                            <li>Then, activate your new wallet and ensure to write down your new passwords. Note that your passwords are the only way you can access your wallet; keep them in a safe place and don’t lose them. You will have a spending password (which is the one used for transacting), and a 12- or 24-word passphrase depending on the wallet you chose.</li>
                                                            <li>Recreate your passphrase and accept the terms and conditions. The wallet should be now all set.</li>
                                                            <li>Click ‘Receive’ and copy a wallet address or download a PDF file with the QR code. You will need to use this address to receive your cryptocurrency later.</li>
                                                        </ol>
                                                        <h6><span>Step 2: Choose an exchange</span></h6>
                                                        <ol>
                                                            <li>Explore cryptocurrency exchanges and choose the one that supports ada.</li>
                                                            <li>Create an account. To create an account, exchanges typically require such personal information as:
                                                                <ul>
                                                                    <li>full name</li>
                                                                    <li>address</li>
                                                                    <li>email address and phone number</li>
                                                                    <li>payment method (to fund your account)</li>
                                                                    <li>a document that identifies your personality (passport, driver’s license, ID, etc)</li>
                                                                </ul>
                                                            </li>
                                                        </ol>
                                                        <p>We recommend setting up 2FA verification for enhanced security and funds safety. It usually takes from several minutes to several days for an account to be activated. This depends on the chosen exchange.</p>
                                                        <h6><span>Step 3: Purchase ada</span></h6>
                                                        <ol>
                                                            <li>Sign in to your exchange account</li>
                                                            <li>Select a Buy/Sell option, which is usually at the top menu.</li>
                                                            <li>Click Buy, enter ADA (Cardano) as the cryptocurrency you wish to purchase.</li>
                                                            <li>Indicate the amount of ada you would like to purchase and select a payment method (whether it is a wire transfer, credit or debit card). Each exchange will offer you available options, please read them carefully and follow the outlined steps.</li>
                                                            <li>Confirm your purchase. You will typically have to confirm it via email and enter the 2FA code (in case you have set it up). You will then receive your ada on the exchange account.</li>
                                                            <li>Withdraw ada to your personal wallet. If this is the first time you are making a withdrawal, try smaller amounts to verify that everything works. Note that it is highly not recommended to store ada (or any other cryptocurrency) on the exchange account. To transfer your ada, choose the ‘Withdraw’ option, paste your wallet address (the one you copied earlier from your wallet) and submit your transfer.</li>
                                                            <li>Check you have received your funds. Go to your wallet and check the balance. You can also track recent transactions using different explorer tools.</li>
                                                        </ol>
                                                        <p>You can now store ada in your personal wallet, transact between different addresses, receive more ada as payment for services (for example), or delegate it to earn rewards.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                    </div>
                                    <div className={"section " + ( this.state.activeTab === '3' ? 'active' : '' )}>
                                        <h4 className="big mb-5">Wallets and ada</h4>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '41' ? 'active' : '')} onClick={() => this.toggleQuestion('41')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What is going to happen during the live stream?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '41' ?
                                                    <div className="answer">
                                                        <p>During the live stream, Stephen Wolfram will create (mint) live his own NFTs for the first time. You will be able to watch the creation of these unique pieces live.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                    </div>
                                    <div className={"section " + ( this.state.activeTab === '4' ? 'active' : '' )}>
                                        <h4 className="big mb-5">Auction process</h4>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '51' ? 'active' : '')} onClick={() => this.toggleQuestion('51')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />How can I bid?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '51' ?
                                                    <div className="answer">
                                                        <ol>
                                                            <li>Go to the selected NFT page.</li>
                                                            <li>Be sure that the action has already started. If not, save the date.</li>
                                                            <li>From the moment the auction starts for the NFT you want, you will see the maximum amount of ada that were already bidden for that NFT.</li>
                                                            <li>You will be able to place your bid, selecting the amount of ada you are interested in paying for winning that piece. Make sure to place a bid higher than the maximum that was already placed, and remember that there can be a transaction fee for the blockchain.</li>
                                                            <li>Confirm that you want to place your bid. Remember that from that moment, your ada will be retained by the platform until the auction closes.</li>
                                                            <li>If you win the auction, you will receive your NFT in your wallet for the amount of ada that you paid. If you don’t win, you will receive your ada back.</li>
                                                        </ol>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '52' ? 'active' : '')} onClick={() => this.toggleQuestion('52')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />Which are the payment methods allowed for bidding?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '52' ?
                                                    <div className="answer">
                                                        <p>The only payment method allowed for bidding is ada (ADA) cryptocurrency.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '53' ? 'active' : '')} onClick={() => this.toggleQuestion('53')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What happens with my money if I don’t win?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '53' ?
                                                    <div className="answer">
                                                        <p>If you don't win, you will receive your ada back to your auction wallet.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '54' ? 'active' : '')} onClick={() => this.toggleQuestion('54')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />How do I know if I win the auction?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '54' ?
                                                    <div className="answer">
                                                        <p>If you are the winner, you will receive a Browser Notification, so please be sure to have these notifications activated. Also you will find your new NFT in the section "My NFTs".</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                    </div>
                                    <div className={"section " + ( this.state.activeTab === '5' ? 'active' : '' )}>
                                        <h4 className="big mb-5">Owning an NFT</h4>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '61' ? 'active' : '')} onClick={() => this.toggleQuestion('61')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />What does it mean to own an NFT?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '61' ?
                                                    <div className="answer">
                                                        <p>If you own an NFT, you are the owner of that unique digital art piece that is represented in your token. This does not mean that you are the owner of the intellectual property rights or copyright of the underlying content, just exactly as if you buy a physical painting-</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '62' ? 'active' : '')} onClick={() => this.toggleQuestion('62')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />Can I send my NFTs to another wallet that I have?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '62' ?
                                                    <div className="answer">
                                                        <p>The wallets don’t support NFTs yet, that’s why for now you should keep your NFTs in your Auction wallet. You’ll be able to send them to other wallets very soon.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                        <div className="qa-block">
                                            <button type="button" className={"remove-style-button " + (this.state.activeAnswer === '63' ? 'active' : '')} onClick={() => this.toggleQuestion('63')}><img src={arrowGray} className="arrow" alt="" /><img src={arrowGrayHover} className="arrow" alt="" />How can I close my account?</button>
                                            <SlideDown className={'my-dropdown-slidedown'}>
                                                { this.state.activeAnswer === '63' ?
                                                    <div className="answer">
                                                        <p>Considering that Cardano wallets don’t support NFTs yet, it is not possible to send your NFTs to external wallets. That’s why we recommend you don’t close your account in order to prevent possible NFTs losses.</p>
                                                    </div>
                                                    : null}
                                            </SlideDown>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-space-60" />
                            </div>
                        </div>
                    </div>
                    <div className="empty-space-100" />
                </div>
                <Footer />
            </div>
        )
    }
}