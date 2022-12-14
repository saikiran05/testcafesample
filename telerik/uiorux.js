import XPathSelector from "./xpathtest.js";
class uiorux{
    constructor(){
this.theamBuilder=XPathSelector("//div[contains(text(),'ThemeBuilder')]")



    }
}
export default new uiorux();