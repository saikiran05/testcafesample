import TestRunHookDefinition from "@cucumber/cucumber/lib/models/test_run_hook_definition";
import { Selector,t } from "testcafe";
import xpathtest from "./xpathtest";
import XPathSelector  from "./xpathtest";
class Homepage{
    constructor(){
        this.learnmore=Selector("a[href='https://www.telerik.com/blogs/day-0-support-dotnet-7-across-telerik-libraries-tools']")
        this.allProducts=Selector(".TK-Products-Menu")
        this.demos=Selector(".TK-Menu-Item-Link[href='/support/demos']")
        this.Services=Selector(".TK-Menu-Item-Link[href='/services']")
        this.blogs=Selector(".TK-Menu-Item-Link[href='/blogs']")
        this.docsandsupport=Selector(".TK-Menu-Item-Link[href='/support']")
        this.docsandsupport=Selector(".TK-Menu-Item-Link[href='/support']")
        this.pricing=Selector(".TK-Menu-Item-Link[href='/purchase.aspx']")
        this.searchicon=Selector("#js-tlrk-nav-search-link")
        this.carticon=Selector(".TK-Counter.TK-Counter--Empty.TK-Counter--SC.TK-Counter--Visible")
        this.accounticon=Selector("#js-tlrk-nav-not-auth-container")
        this.contacticon=Selector("a[title='Contact Us']")
        this.getfreeTrail=Selector(".TK-Button.TK-Button--CTA")
        this.DownlodeDevCraftTrail=Selector(".Btn.Btn--prim.Btn--l.u-fs24.u-pl3.u-pr3.u-mb1.u-s-db")
this.webcomponent=Selector('#ContentPlaceholder1_C352_Col00')
this.desktopcomponent=Selector('#ContentPlaceholder1_C352_Col01')
this.mobilecomponent=Selector('#ContentPlaceholder1_C352_Col02')
this.reportsanddashbord=Selector('#ContentPlaceholder1_C352_Col03')
this.testinganddebug=Selector('#ContentPlaceholder1_C352_Col04')
this.uianduxtool=Selector('#ContentPlaceholder1_C352_Col05')
this.moreaboutdev=Selector('.Btn.Btn--ghost.Text--b9.u-pl5.u-pr5.track--learn-more-devcraft')
this.kindoui=Selector('.Btn.Btn--ghost.Text--b9.u-pl5.u-pr5.track--learn-more-kendo')
this.latestnews=Selector('.Card-content.u-mb2.u-dib.u-fs20.u-vam.u-mr7.u-s-pl0.u-s-mb3.u-c-base').withText('Check out our latest release:') //unused
this.latestnewtest=Selector('.u-c-link').withText('Check out our latest release:'); //unused
this.challange=Selector('.u-tint-white')
this.paterandcommunity=Selector('.u-tint-white')
this.portfolio=Selector('#ContentPlaceholder1_C383_Col00')
this.seepricing=Selector('#ContentPlaceholder1_C383_Col01')
this.replay=Selector('.Story-controls').withAttribute('a.js-replay')
this.awards=Selector('.col-5.u-m-col-12.u-m-mb3').withText('Awards')
this.testmonielspre=Selector('.Testimonials-prev')
this.testmonielnest=Selector('.Testimonials-next')
this.testmonialdots=Selector('.Testimonials-dots')
this.trustawards=Selector('.u-fs14.u-ff-sans0.u-pt1.u-c-black')
this.trustawardsrev=Selector('.u-fs14 u-ff-sans0 u-pt1.u-c-black')
this.stopanimation=xpathtest("//a[@aria-label='Pause']//img")
this.newsandupdateRelease=Selector("div[class='u-pt3 u-pb3 reveal-right-2 u-m-pt0'] a[class='Text--lb7']")
this.newsandupdateBlogpost=Selector("div[class='u-pt3 u-pb3 reveal-right-1'] a[class='Text--lb7']")
this.newsandupdateBlogpost2=Selector("div[class='u-pt3 u-pb3 reveal-right-3 u-m-pt0'] a[class='Text--lb7']")
this.ourBlogs=Selector('#ContentPlaceholder1_C416_Col00')



this.tDevVraft=Selector(".TK-Footer-Featured-Link[href='/devcraft']")
this.kendoUi=Selector(".TK-Footer-Featured-Link[href='/kendo-ui']")
this.freetrails=Selector(".TK-Footer-Link[href='/download']")
this.pricing=Selector(".TK-Footer-Link[href='/purchase.aspx']")
this.demos2=Selector(".TK-Footer-Link[href='/support/demos']")
this.documents=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)")
this.release=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)")
this.forms=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)")
this.blogs=Selector(".TK-Footer-Link[href='/blogs']")
this.webnair=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)")
this.profficionalService=Selector(".TK-Footer-Link[href='/services']")
this.patners=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(8) > a:nth-child(1)")
this.visualClassrooms=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)")
this.events=Selector("body > div:nth-child(4) > footer:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(10) > a:nth-child(1)")


}

}
export default new Homepage();