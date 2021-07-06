gdjs.SettingsCode = {};
gdjs.SettingsCode.GDSettingsTitleObjects1= [];
gdjs.SettingsCode.GDSettingsTitleObjects2= [];
gdjs.SettingsCode.GDSettingsTitleObjects3= [];
gdjs.SettingsCode.GDBackButtonObjects1= [];
gdjs.SettingsCode.GDBackButtonObjects2= [];
gdjs.SettingsCode.GDBackButtonObjects3= [];
gdjs.SettingsCode.GDPlusButtonObjects1= [];
gdjs.SettingsCode.GDPlusButtonObjects2= [];
gdjs.SettingsCode.GDPlusButtonObjects3= [];
gdjs.SettingsCode.GDSubtractButtonObjects1= [];
gdjs.SettingsCode.GDSubtractButtonObjects2= [];
gdjs.SettingsCode.GDSubtractButtonObjects3= [];
gdjs.SettingsCode.GDYesButtonObjects1= [];
gdjs.SettingsCode.GDYesButtonObjects2= [];
gdjs.SettingsCode.GDYesButtonObjects3= [];
gdjs.SettingsCode.GDNoButtonObjects1= [];
gdjs.SettingsCode.GDNoButtonObjects2= [];
gdjs.SettingsCode.GDNoButtonObjects3= [];
gdjs.SettingsCode.GDFullscreenObjects1= [];
gdjs.SettingsCode.GDFullscreenObjects2= [];
gdjs.SettingsCode.GDFullscreenObjects3= [];
gdjs.SettingsCode.GDLanguageObjects1= [];
gdjs.SettingsCode.GDLanguageObjects2= [];
gdjs.SettingsCode.GDLanguageObjects3= [];
gdjs.SettingsCode.GDViewObjects1= [];
gdjs.SettingsCode.GDViewObjects2= [];
gdjs.SettingsCode.GDViewObjects3= [];
gdjs.SettingsCode.GDMFullscreenObjects1= [];
gdjs.SettingsCode.GDMFullscreenObjects2= [];
gdjs.SettingsCode.GDMFullscreenObjects3= [];
gdjs.SettingsCode.GDViewTitleObjects1= [];
gdjs.SettingsCode.GDViewTitleObjects2= [];
gdjs.SettingsCode.GDViewTitleObjects3= [];
gdjs.SettingsCode.GDViewTextObjects1= [];
gdjs.SettingsCode.GDViewTextObjects2= [];
gdjs.SettingsCode.GDViewTextObjects3= [];
gdjs.SettingsCode.GDResolutionObjects1= [];
gdjs.SettingsCode.GDResolutionObjects2= [];
gdjs.SettingsCode.GDResolutionObjects3= [];
gdjs.SettingsCode.GDMResolutionObjects1= [];
gdjs.SettingsCode.GDMResolutionObjects2= [];
gdjs.SettingsCode.GDMResolutionObjects3= [];
gdjs.SettingsCode.GDResolutionSelectObjects1= [];
gdjs.SettingsCode.GDResolutionSelectObjects2= [];
gdjs.SettingsCode.GDResolutionSelectObjects3= [];
gdjs.SettingsCode.GDViewImageObjects1= [];
gdjs.SettingsCode.GDViewImageObjects2= [];
gdjs.SettingsCode.GDViewImageObjects3= [];
gdjs.SettingsCode.GDMLanguageObjects1= [];
gdjs.SettingsCode.GDMLanguageObjects2= [];
gdjs.SettingsCode.GDMLanguageObjects3= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.condition3IsTrue_0 = {val:false};
gdjs.SettingsCode.condition4IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};
gdjs.SettingsCode.condition3IsTrue_1 = {val:false};
gdjs.SettingsCode.condition4IsTrue_1 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.SettingsCode.GDBackButtonObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMFullscreenObjects2Objects = Hashtable.newFrom({"MFullscreen": gdjs.SettingsCode.GDMFullscreenObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMFullscreenObjects2Objects = Hashtable.newFrom({"MFullscreen": gdjs.SettingsCode.GDMFullscreenObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMResolutionObjects2Objects = Hashtable.newFrom({"MResolution": gdjs.SettingsCode.GDMResolutionObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMResolutionObjects2Objects = Hashtable.newFrom({"MResolution": gdjs.SettingsCode.GDMResolutionObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMLanguageObjects2Objects = Hashtable.newFrom({"MLanguage": gdjs.SettingsCode.GDMLanguageObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMLanguageObjects1Objects = Hashtable.newFrom({"MLanguage": gdjs.SettingsCode.GDMLanguageObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("MFullscreen"), gdjs.SettingsCode.GDMFullscreenObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMFullscreenObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMFullscreenObjects2 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMFullscreenObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setString("全屏");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setString("选择画面是否全屏。\n\n效果将直接生效。");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMFullscreenObjects2[i].getBehavior("Tween").addObjectOpacityTween("MFullscreenAppearAnimation", 255, "easeInQuad", 50, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMFullscreenObjects2[i].getBehavior("Tween").addObjectScaleTween("MFullscreenAnimation", 0.58, 0.70, "linear", 150, false, true);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 230, 426, "bouncePast", 100, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 231, 671, "bouncePast", 120, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewTitleAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375, 72, "bouncePast", 130, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewTextAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375, 126, "bouncePast", 140, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MFullscreen"), gdjs.SettingsCode.GDMFullscreenObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMFullscreenObjects2Objects, runtimeScene, true, true);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9287796);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMFullscreenObjects2 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMFullscreenObjects2[i].getBehavior("Tween").addObjectOpacityTween("MFullscreenAppearAnimation", 0, "easeOutQuad", 150, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMFullscreenObjects2[i].getBehavior("Tween").addObjectScaleTween("MFullscreenAnimation", 0.55, 0.55, "linear", 150, false, true);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 230, 426, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewAppear", 0, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 231, 671, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageDisappear", 0, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 375, 72, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 375, 126, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MResolution"), gdjs.SettingsCode.GDMResolutionObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMResolutionObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMResolutionObjects2 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDMResolutionObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMResolutionObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setString("画面分辨率");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setString("选择画面显示的分辨率，横纵像素乘积越大，画面越清晰。\n\n效果将直接生效。");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMResolutionObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMResolutionObjects2[i].getBehavior("Tween").addObjectScaleTween("MResolutionAnimation", 0.58, 0.70, "linear", 150, false, true);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMResolutionObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMResolutionObjects2[i].getBehavior("Tween").addObjectOpacityTween("MResolutionAppearAnimation", 255, "easeInQuad", 50, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 230, 426, "bouncePast", 100, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 231, 671, "bouncePast", 120, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewTextAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375, 126, "bouncePast", 140, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewTitleAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375, 72, "bouncePast", 130, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MResolution"), gdjs.SettingsCode.GDMResolutionObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMResolutionObjects2Objects, runtimeScene, true, true);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9238300);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMResolutionObjects2 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setString("");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMResolutionObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMResolutionObjects2[i].getBehavior("Tween").addObjectScaleTween("MResolutionAnimation", 0.55, 0.55, "linear", 150, false, true);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMResolutionObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMResolutionObjects2[i].getBehavior("Tween").addObjectOpacityTween("MResolutionAppearAnimation", 0, "easeOutQuad", 150, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 230, 426, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewAppear", 0, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 231, 671, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageDisappear", 0, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 375, 72, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 375, 126, "bouncePast", 200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MLanguage"), gdjs.SettingsCode.GDMLanguageObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMLanguageObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMLanguageObjects2 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDMLanguageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMLanguageObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setString("语言");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setString("选择显示语言。默认为简体中文，目前暂时不能更改。\n\n效果将直接生效。");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].setAnimationFrame(2);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMLanguageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMLanguageObjects2[i].getBehavior("Tween").addObjectScaleTween("MLanguageAnimation", 0.58, 0.70, "linear", 150, false, true);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMLanguageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDMLanguageObjects2[i].getBehavior("Tween").addObjectOpacityTween("MLanguageAppearAnimation", 255, "easeInQuad", 50, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 230, 426, "bouncePast", 100, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 231, 671, "bouncePast", 120, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewTextAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375, 126, "bouncePast", 140, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].getBehavior("Tween").addObjectPositionTween("ViewTitleAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375, 72, "bouncePast", 130, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MLanguage"), gdjs.SettingsCode.GDMLanguageObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDMLanguageObjects1Objects, runtimeScene, true, true);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9302460);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDMLanguageObjects1 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects1[i].setAnimationFrame(2);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMLanguageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMLanguageObjects1[i].getBehavior("Tween").addObjectScaleTween("MFullscreenAnimation", 0.55, 0.55, "linear", 150, false, true);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMLanguageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMLanguageObjects1[i].getBehavior("Tween").addObjectOpacityTween("MLanguageAppearAnimation", 0, "easeInQuad", 150, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects1[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 230, 426, "linear", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects1[i].getBehavior("Tween").addObjectOpacityTween("ViewAppear", 0, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects1[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 231, 671, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects1[i].getBehavior("Tween").addObjectOpacityTween("ViewImageDisappear", 0, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects1[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects1[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 375, 72, "bouncePast", 200, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects1[i].getBehavior("Tween").addObjectOpacityTween("ViewImageAppear", 255, "linear", 80, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects1[i].getBehavior("Tween").addObjectPositionTween("ViewAnimation", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 375, 126, "bouncePast", 200, false);
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.SettingsCode.GDYesButtonObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.SettingsCode.GDYesButtonObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.SettingsCode.GDNoButtonObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.SettingsCode.GDNoButtonObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects = Hashtable.newFrom({"ResolutionSelect": gdjs.SettingsCode.GDResolutionSelectObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects = Hashtable.newFrom({"ResolutionSelect": gdjs.SettingsCode.GDResolutionSelectObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackButtonObjects2Objects = Hashtable.newFrom({"BackButton": gdjs.SettingsCode.GDBackButtonObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.SettingsCode.GDBackButtonObjects1});gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.SettingsCode.GDYesButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].setColor("204;204;204");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Deflect", 0.80, 0.80, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.SettingsCode.GDYesButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDYesButtonObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Deflect", 0.65, 0.65, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.SettingsCode.GDNoButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].setColor("204;204;204");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Deflect", 0.80, 0.80, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.SettingsCode.GDNoButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDNoButtonObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("Deflect", 0.65, 0.65, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDResolutionSelectObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects2[i].getBehavior("Tween").addObjectScaleTween("Deflect", 0.7, 0.7, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDResolutionSelectObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects2[i].getBehavior("Tween").addObjectScaleTween("Deflect", 0.6, 0.6, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDBackButtonObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("BackAnimation", 0.8, 0.8, "bouncePast", 150, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects1[i].getBehavior("Tween").addObjectScaleTween("BackAnimation", 0.70, 0.70, "bouncePast", 150, false, true);
}
}}

}


};gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.SettingsCode.GDNoButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.SettingsCode.GDYesButtonObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].setColor("170;255;149");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].setColor("255;255;255");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.SettingsCode.GDNoButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.SettingsCode.GDYesButtonObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects1[i].setColor("255;149;149");
}
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesButtonObjects2Objects = Hashtable.newFrom({"YesButton": gdjs.SettingsCode.GDYesButtonObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoButtonObjects2Objects = Hashtable.newFrom({"NoButton": gdjs.SettingsCode.GDNoButtonObjects2});gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YesButton"), gdjs.SettingsCode.GDYesButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDYesButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9310348);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDYesButtonObjects2 */
{gdjs.evtTools.advancedWindow.setResizable(true);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.SettingsCode.GDYesButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDYesButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("MFullMouse", 0.45, 0.45, "bouncePast", 100, false, true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NoButton"), gdjs.SettingsCode.GDNoButtonObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDNoButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9311748);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDNoButtonObjects2 */
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{gdjs.evtTools.advancedWindow.setResizable(true);
}{gdjs.evtTools.window.setWindowSize(runtimeScene, 1600, 900, false);
}{for(var i = 0, len = gdjs.SettingsCode.GDNoButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDNoButtonObjects2[i].getBehavior("Tween").addObjectScaleTween("MFullMouse", 0.45, 0.45, "bouncePast", 100, false, true);
}
}}

}


{


{
}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects = Hashtable.newFrom({"ResolutionSelect": gdjs.SettingsCode.GDResolutionSelectObjects2});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects = Hashtable.newFrom({"ResolutionSelect": gdjs.SettingsCode.GDResolutionSelectObjects2});gdjs.SettingsCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition2IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9314516);
}
}}
}
if (gdjs.SettingsCode.condition2IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDResolutionSelectObjects2 */
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects2[i].setAnimationFrame(gdjs.SettingsCode.GDResolutionSelectObjects2[i].getAnimationFrame() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
gdjs.SettingsCode.condition2IsTrue_0.val = false;
gdjs.SettingsCode.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDResolutionSelectObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDResolutionSelectObjects2[i].getAnimationFrame() > 2 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDResolutionSelectObjects2[k] = gdjs.SettingsCode.GDResolutionSelectObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDResolutionSelectObjects2.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition1IsTrue_0.val ) {
{
gdjs.SettingsCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDResolutionSelectObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SettingsCode.condition2IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition3IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9315188);
}
}}
}
}
if (gdjs.SettingsCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects2);
/* Reuse gdjs.SettingsCode.GDResolutionSelectObjects2 */
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects2[i].setAnimationFrame(0);
}
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1600, 900);
}{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 133,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 82);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 230,426);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375,72);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375,126);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 231,671);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(900);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects2);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDResolutionSelectObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDResolutionSelectObjects2[i].getAnimationFrame() == 1 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDResolutionSelectObjects2[k] = gdjs.SettingsCode.GDResolutionSelectObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDResolutionSelectObjects2.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9318708);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects2);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 230,426);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375,72);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375,126);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 133,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 82);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 231,671);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1080);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDResolutionSelectObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDResolutionSelectObjects1[i].getAnimationFrame() == 2 ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDResolutionSelectObjects1[k] = gdjs.SettingsCode.GDResolutionSelectObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDResolutionSelectObjects1.length = k;}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9321076);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewText"), gdjs.SettingsCode.GDViewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewTitle"), gdjs.SettingsCode.GDViewTitleObjects1);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 3840, 2160);
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 230,426);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTitleObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375,72);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewTextObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewTextObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 375,126);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackButtonObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 133,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 82);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 231,671);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2160);
}}

}


};gdjs.SettingsCode.eventsList5 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MFullscreen"), gdjs.SettingsCode.GDMFullscreenObjects1);
gdjs.copyArray(runtimeScene.getObjects("MLanguage"), gdjs.SettingsCode.GDMLanguageObjects1);
gdjs.copyArray(runtimeScene.getObjects("MResolution"), gdjs.SettingsCode.GDMResolutionObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects1);
gdjs.copyArray(runtimeScene.getObjects("View"), gdjs.SettingsCode.GDViewObjects1);
gdjs.copyArray(runtimeScene.getObjects("ViewImage"), gdjs.SettingsCode.GDViewImageObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SettingsCode.GDViewImageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDViewImageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMFullscreenObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMFullscreenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMResolutionObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMResolutionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SettingsCode.GDMLanguageObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMLanguageObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.SettingsCode.GDBackButtonObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDBackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SettingsTitle"), gdjs.SettingsCode.GDSettingsTitleObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDSettingsTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSettingsTitleObjects1[i].getBehavior("Tween").addObjectPositionTween("转场", -(300), 36, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDSettingsTitleObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSettingsTitleObjects1[i].getBehavior("Tween").addObjectOpacityTween("转场2", 0, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsTitle"), gdjs.SettingsCode.GDSettingsTitleObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDSettingsTitleObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSettingsTitleObjects1[i].getBehavior("Tween").hasFinished("转场") ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDSettingsTitleObjects1[k] = gdjs.SettingsCode.GDSettingsTitleObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSettingsTitleObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 900;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects1[i].setAnimationFrame(0);
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1080;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects1[i].setAnimationFrame(1);
}
}{gdjs.evtTools.storage.writeStringInJSONFile("ResolutionSettings", "1080", "1080");
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2160;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ResolutionSelect"), gdjs.SettingsCode.GDResolutionSelectObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDResolutionSelectObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDResolutionSelectObjects1[i].setAnimationFrame(2);
}
}}

}


{


gdjs.SettingsCode.eventsList0(runtimeScene);
}


{


gdjs.SettingsCode.eventsList1(runtimeScene);
}


{


gdjs.SettingsCode.eventsList2(runtimeScene);
}


{


gdjs.SettingsCode.eventsList3(runtimeScene);
}


{


gdjs.SettingsCode.eventsList4(runtimeScene);
}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDSettingsTitleObjects1.length = 0;
gdjs.SettingsCode.GDSettingsTitleObjects2.length = 0;
gdjs.SettingsCode.GDSettingsTitleObjects3.length = 0;
gdjs.SettingsCode.GDBackButtonObjects1.length = 0;
gdjs.SettingsCode.GDBackButtonObjects2.length = 0;
gdjs.SettingsCode.GDBackButtonObjects3.length = 0;
gdjs.SettingsCode.GDPlusButtonObjects1.length = 0;
gdjs.SettingsCode.GDPlusButtonObjects2.length = 0;
gdjs.SettingsCode.GDPlusButtonObjects3.length = 0;
gdjs.SettingsCode.GDSubtractButtonObjects1.length = 0;
gdjs.SettingsCode.GDSubtractButtonObjects2.length = 0;
gdjs.SettingsCode.GDSubtractButtonObjects3.length = 0;
gdjs.SettingsCode.GDYesButtonObjects1.length = 0;
gdjs.SettingsCode.GDYesButtonObjects2.length = 0;
gdjs.SettingsCode.GDYesButtonObjects3.length = 0;
gdjs.SettingsCode.GDNoButtonObjects1.length = 0;
gdjs.SettingsCode.GDNoButtonObjects2.length = 0;
gdjs.SettingsCode.GDNoButtonObjects3.length = 0;
gdjs.SettingsCode.GDFullscreenObjects1.length = 0;
gdjs.SettingsCode.GDFullscreenObjects2.length = 0;
gdjs.SettingsCode.GDFullscreenObjects3.length = 0;
gdjs.SettingsCode.GDLanguageObjects1.length = 0;
gdjs.SettingsCode.GDLanguageObjects2.length = 0;
gdjs.SettingsCode.GDLanguageObjects3.length = 0;
gdjs.SettingsCode.GDViewObjects1.length = 0;
gdjs.SettingsCode.GDViewObjects2.length = 0;
gdjs.SettingsCode.GDViewObjects3.length = 0;
gdjs.SettingsCode.GDMFullscreenObjects1.length = 0;
gdjs.SettingsCode.GDMFullscreenObjects2.length = 0;
gdjs.SettingsCode.GDMFullscreenObjects3.length = 0;
gdjs.SettingsCode.GDViewTitleObjects1.length = 0;
gdjs.SettingsCode.GDViewTitleObjects2.length = 0;
gdjs.SettingsCode.GDViewTitleObjects3.length = 0;
gdjs.SettingsCode.GDViewTextObjects1.length = 0;
gdjs.SettingsCode.GDViewTextObjects2.length = 0;
gdjs.SettingsCode.GDViewTextObjects3.length = 0;
gdjs.SettingsCode.GDResolutionObjects1.length = 0;
gdjs.SettingsCode.GDResolutionObjects2.length = 0;
gdjs.SettingsCode.GDResolutionObjects3.length = 0;
gdjs.SettingsCode.GDMResolutionObjects1.length = 0;
gdjs.SettingsCode.GDMResolutionObjects2.length = 0;
gdjs.SettingsCode.GDMResolutionObjects3.length = 0;
gdjs.SettingsCode.GDResolutionSelectObjects1.length = 0;
gdjs.SettingsCode.GDResolutionSelectObjects2.length = 0;
gdjs.SettingsCode.GDResolutionSelectObjects3.length = 0;
gdjs.SettingsCode.GDViewImageObjects1.length = 0;
gdjs.SettingsCode.GDViewImageObjects2.length = 0;
gdjs.SettingsCode.GDViewImageObjects3.length = 0;
gdjs.SettingsCode.GDMLanguageObjects1.length = 0;
gdjs.SettingsCode.GDMLanguageObjects2.length = 0;
gdjs.SettingsCode.GDMLanguageObjects3.length = 0;

gdjs.SettingsCode.eventsList5(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
