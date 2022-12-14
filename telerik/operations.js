import home from "./home";
import Homepage from  "./home"
import desktopcomponents from "./desktopcomponents";
import webcomponents from "./webcomponents"
import mobilecomponents from "./mobilecomponents"
import testanddebugging from "./testanddebugging";
import uiorux from "./uiorux";
import contactus from "./contactus";
import demopage from "./demopage";

import { ClientFunction } from "testcafe";

const dataset=require('./data.json')
const URL='https://www.telerik.com/';

const getPageURL = ClientFunction(() => window.location.href); 
fixture("testing")
.page(URL);


test('sample test' ,async t => {
    await t
    
    .maximizeWindow()
    .setTestSpeed(0.1)
    .debug()
    .click(home.stopanimation)
    .hover(home.allProducts)
    .click(home.learnmore)
    .click(home.demos)
    // .click(home.uianduxtool)
//     .click(uiorux.theamBuilder)
//     .click(home.testinganddebug)
//     .click(testanddebugging.justMock)
//     .click(home.mobilecomponent)
//     .click(mobilecomponents.uiForXamarin)
//     .click(home.webcomponent)
//     .click(desktopcomponents.uiForwpf)
//      .click(webcomponents.devCraft)
//     .click(webcomponents.downlodeFreeTrail)
//      .click(home.desktopcomponent)
//     .click(home.mobilecomponent)
//      .click(home.reportsanddashbord)
//     .click(home.testinganddebug)
//     .click(home.uianduxtool)
//     .click(home.kindoui)
//     .click(home.moreaboutdev)
//     // .expect(home.latestnews.exists).ok() //unused
//     .click(home.challange)
//     .click(home.paterandcommunity)
//     .click(home.portfolio)
//     .click(home.replay)
//   .expect(home.awards.exists).ok()
//     // .click(home.trustawards).wait(2000)//not working due to ste  restrictions
//    .click(home.testmonielspre).click(home.testmonielnest).click(home.testmonialdots)
// .click(home.newsandupdateBlogpost)
// .click(home.ourBlogs)



});



test('sample test2' ,async t => {
  await t
  .click(home.webcomponent)
  .click(webcomponents.uiforVue)
});

dataset.forEach(data =>{



test('contact us1',async t =>{
  await t
  .maximizeWindow()
  .debug()
  .click(home.contacticon)
  .click(contactus.whatcanihelpwithyou)
  .click(contactus.whatcanihelpwithyou.find('option').withText(data.dropdown1))
  .click(contactus.productIntrest)
  .click(contactus.productIntrest.find('option').withText(data.dropdown2))
  .typeText(contactus.FirstnName,data.firstname)
  .typeText(contactus.LastName,data.lastname)
  .typeText(contactus.bussinessEmail,data.bussinessemail)
  .typeText(contactus.companyName,data.companyname)
  .click(contactus.country)
  .click(contactus.country.find('option').withText(data.country))
  .typeText(contactus.phoneNumber,data.phonenumber)
  .typeText(contactus.comments,data.comments)
  .click(contactus.SitefinityQuestions)
  // .expect(getPageURL()).contains('sitefinity')
})});

test.only('manual data insertion ',async t =>{
  await t
  .maximizeWindow()
  .debug()
  .click(home.contacticon)
  .click(contactus.whatcanihelpwithyou)
  .click(contactus.whatcanihelpwithyou.find('option').withText("Product questions"))
  .click(contactus.productIntrest)
  .click(contactus.productIntrest.find('option').withText("DevCraft"))
  .typeText(contactus.FirstnName,"rahul")
  .typeText(contactus.LastName,"krihana")
  .typeText(contactus.bussinessEmail,"xyzsoluctions@gmail.com")
  .typeText(contactus.companyName,"xyzsoluctions")
  .click(contactus.country)
  .click(contactus.country.find('option').withText("Andorra"))
  .typeText(contactus.phoneNumber,"8528526396")
  .typeText(contactus.comments,"not intrested ")
  .click(contactus.SitefinityQuestions)
  // .expect(getPageURL()).contains('sitefinity')
});



test('contact us',async t =>{
  await t
  .maximizeWindow()
  .click(home.demos)
  .click(demopage.web)
  .click(demopage.desktop)
  .click(demopage.mobile)
  .click(demopage.reportingQa)
  .click(demopage.conversationalUi)
  .click(demopage.SitefinityCms)


});