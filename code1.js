gdjs.StartMenuCode = {};
gdjs.StartMenuCode.GDGeometryWarLogoObjects1= [];
gdjs.StartMenuCode.GDGeometryWarLogoObjects2= [];
gdjs.StartMenuCode.GDGeometryWarLogoObjects3= [];
gdjs.StartMenuCode.GDMrWangStudiosLogoObjects1= [];
gdjs.StartMenuCode.GDMrWangStudiosLogoObjects2= [];
gdjs.StartMenuCode.GDMrWangStudiosLogoObjects3= [];
gdjs.StartMenuCode.GDStartButtonObjects1= [];
gdjs.StartMenuCode.GDStartButtonObjects2= [];
gdjs.StartMenuCode.GDStartButtonObjects3= [];
gdjs.StartMenuCode.GDSettingsButtonObjects1= [];
gdjs.StartMenuCode.GDSettingsButtonObjects2= [];
gdjs.StartMenuCode.GDSettingsButtonObjects3= [];
gdjs.StartMenuCode.GDNewObjectObjects1= [];
gdjs.StartMenuCode.GDNewObjectObjects2= [];
gdjs.StartMenuCode.GDNewObjectObjects3= [];
gdjs.StartMenuCode.GDExitButtonObjects1= [];
gdjs.StartMenuCode.GDExitButtonObjects2= [];
gdjs.StartMenuCode.GDExitButtonObjects3= [];

gdjs.StartMenuCode.conditionTrue_0 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_0 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_0 = {val:false};
gdjs.StartMenuCode.conditionTrue_1 = {val:false};
gdjs.StartMenuCode.condition0IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition1IsTrue_1 = {val:false};
gdjs.StartMenuCode.condition2IsTrue_1 = {val:false};


gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.StartMenuCode.GDStartButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.StartMenuCode.GDStartButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDSettingsButtonObjects2Objects = Hashtable.newFrom({"SettingsButton": gdjs.StartMenuCode.GDSettingsButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDSettingsButtonObjects2Objects = Hashtable.newFrom({"SettingsButton": gdjs.StartMenuCode.GDSettingsButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDExitButtonObjects2Objects = Hashtable.newFrom({"ExitButton": gdjs.StartMenuCode.GDExitButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.StartMenuCode.GDExitButtonObjects1});gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDStartButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartButtonObjects2[i].setColor("204;204;204");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartButtonObjects2[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDStartButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartButtonObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDStartButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartButtonObjects2[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.StartMenuCode.GDSettingsButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDSettingsButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDSettingsButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDSettingsButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSettingsButtonObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDSettingsButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSettingsButtonObjects2[i].setColor("204;204;204");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.StartMenuCode.GDSettingsButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDSettingsButtonObjects2Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDSettingsButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDSettingsButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSettingsButtonObjects2[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDSettingsButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSettingsButtonObjects2[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.StartMenuCode.GDExitButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDExitButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDExitButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDExitButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDExitButtonObjects2[i].setOpacity(150);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDExitButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDExitButtonObjects2[i].setColor("204;204;204");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.StartMenuCode.GDExitButtonObjects1);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDExitButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.StartMenuCode.GDExitButtonObjects1 */
{for(var i = 0, len = gdjs.StartMenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDExitButtonObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDExitButtonObjects1[i].setColor("255;255;255");
}
}}

}


};gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDSettingsButtonObjects2Objects = Hashtable.newFrom({"SettingsButton": gdjs.StartMenuCode.GDSettingsButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartButtonObjects2Objects = Hashtable.newFrom({"StartButton": gdjs.StartMenuCode.GDStartButtonObjects2});gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDExitButtonObjects2Objects = Hashtable.newFrom({"ExitButton": gdjs.StartMenuCode.GDExitButtonObjects2});gdjs.StartMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.StartMenuCode.GDSettingsButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDSettingsButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GeometryWarLogo"), gdjs.StartMenuCode.GDGeometryWarLogoObjects2);
{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects2[i].getBehavior("Tween").addObjectPositionTween("设置转场", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 1073, 53, "linear", 300, false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects2[i].getBehavior("Tween").addObjectOpacityTween("转场2", 0, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDStartButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.StartMenuCode.GDExitButtonObjects2);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
gdjs.StartMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartMenuCode.mapOfGDgdjs_46StartMenuCode_46GDExitButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeometryWarLogo"), gdjs.StartMenuCode.GDGeometryWarLogoObjects1);

gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length;i<l;++i) {
    if ( gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i].getBehavior("Tween").hasFinished("设置转场") ) {
        gdjs.StartMenuCode.condition0IsTrue_0.val = true;
        gdjs.StartMenuCode.GDGeometryWarLogoObjects1[k] = gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i];
        ++k;
    }
}
gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length = k;}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Settings", false);
}}

}


};gdjs.StartMenuCode.eventsList2 = function(runtimeScene) {

{


{
}

}


};gdjs.StartMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
gdjs.StartMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.StartMenuCode.condition0IsTrue_0.val ) {
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition1IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9238660);
}
}}
if (gdjs.StartMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExitButton"), gdjs.StartMenuCode.GDExitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GeometryWarLogo"), gdjs.StartMenuCode.GDGeometryWarLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("MrWangStudiosLogo"), gdjs.StartMenuCode.GDMrWangStudiosLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.StartMenuCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartMenuCode.GDStartButtonObjects1);
{gdjs.evtTools.advancedWindow.setResizable(false);
}{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 527,53);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDMrWangStudiosLogoObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDMrWangStudiosLogoObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 239,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 82);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDStartButtonObjects1[i].setPosition(108,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 270);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDSettingsButtonObjects1[i].setPosition(108,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 198);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDExitButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDExitButtonObjects1[i].setPosition(108,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 126);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 1073,53);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i].getBehavior("Tween").addObjectPositionTween("转场", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 527, 53, "easeOutCirc", 500, false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDGeometryWarLogoObjects1[i].getBehavior("Tween").addObjectOpacityTween("转场2", 255, "linear", 550, false);
}
}}

}


{


gdjs.StartMenuCode.eventsList0(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList1(runtimeScene);
}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition0IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9260532);
}
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
}

}


{


gdjs.StartMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.StartMenuCode.conditionTrue_1 = gdjs.StartMenuCode.condition0IsTrue_0;
gdjs.StartMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9261460);
}
}if (gdjs.StartMenuCode.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


gdjs.StartMenuCode.eventsList2(runtimeScene);
}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDGeometryWarLogoObjects1.length = 0;
gdjs.StartMenuCode.GDGeometryWarLogoObjects2.length = 0;
gdjs.StartMenuCode.GDGeometryWarLogoObjects3.length = 0;
gdjs.StartMenuCode.GDMrWangStudiosLogoObjects1.length = 0;
gdjs.StartMenuCode.GDMrWangStudiosLogoObjects2.length = 0;
gdjs.StartMenuCode.GDMrWangStudiosLogoObjects3.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects1.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects2.length = 0;
gdjs.StartMenuCode.GDStartButtonObjects3.length = 0;
gdjs.StartMenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.StartMenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.StartMenuCode.GDSettingsButtonObjects3.length = 0;
gdjs.StartMenuCode.GDNewObjectObjects1.length = 0;
gdjs.StartMenuCode.GDNewObjectObjects2.length = 0;
gdjs.StartMenuCode.GDNewObjectObjects3.length = 0;
gdjs.StartMenuCode.GDExitButtonObjects1.length = 0;
gdjs.StartMenuCode.GDExitButtonObjects2.length = 0;
gdjs.StartMenuCode.GDExitButtonObjects3.length = 0;

gdjs.StartMenuCode.eventsList3(runtimeScene);
return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
