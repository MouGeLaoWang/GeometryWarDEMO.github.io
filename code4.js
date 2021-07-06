gdjs.StartGameMenuCode = {};
gdjs.StartGameMenuCode.GDNewObjectObjects1= [];
gdjs.StartGameMenuCode.GDNewObjectObjects2= [];
gdjs.StartGameMenuCode.GDbackbuttonObjects1= [];
gdjs.StartGameMenuCode.GDbackbuttonObjects2= [];

gdjs.StartGameMenuCode.conditionTrue_0 = {val:false};
gdjs.StartGameMenuCode.condition0IsTrue_0 = {val:false};
gdjs.StartGameMenuCode.condition1IsTrue_0 = {val:false};
gdjs.StartGameMenuCode.condition2IsTrue_0 = {val:false};


gdjs.StartGameMenuCode.mapOfGDgdjs_46StartGameMenuCode_46GDbackbuttonObjects1Objects = Hashtable.newFrom({"backbutton": gdjs.StartGameMenuCode.GDbackbuttonObjects1});gdjs.StartGameMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backbutton"), gdjs.StartGameMenuCode.GDbackbuttonObjects1);

gdjs.StartGameMenuCode.condition0IsTrue_0.val = false;
gdjs.StartGameMenuCode.condition1IsTrue_0.val = false;
{
gdjs.StartGameMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.StartGameMenuCode.condition0IsTrue_0.val ) {
{
gdjs.StartGameMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartGameMenuCode.mapOfGDgdjs_46StartGameMenuCode_46GDbackbuttonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartGameMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "StartMenu");
}}

}


};

gdjs.StartGameMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartGameMenuCode.GDNewObjectObjects1.length = 0;
gdjs.StartGameMenuCode.GDNewObjectObjects2.length = 0;
gdjs.StartGameMenuCode.GDbackbuttonObjects1.length = 0;
gdjs.StartGameMenuCode.GDbackbuttonObjects2.length = 0;

gdjs.StartGameMenuCode.eventsList0(runtimeScene);
return;

}

gdjs['StartGameMenuCode'] = gdjs.StartGameMenuCode;
