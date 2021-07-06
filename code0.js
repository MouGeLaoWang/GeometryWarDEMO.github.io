gdjs.StartVideoCode = {};
gdjs.StartVideoCode.GDNewObjectObjects1= [];
gdjs.StartVideoCode.GDNewObjectObjects2= [];

gdjs.StartVideoCode.conditionTrue_0 = {val:false};
gdjs.StartVideoCode.condition0IsTrue_0 = {val:false};
gdjs.StartVideoCode.condition1IsTrue_0 = {val:false};


gdjs.StartVideoCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartVideoCode.condition0IsTrue_0.val = false;
{
gdjs.StartVideoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartVideoCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.StartVideoCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.StartVideoCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.StartVideoCode.GDNewObjectObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.StartVideoCode.GDNewObjectObjects1);

gdjs.StartVideoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.StartVideoCode.GDNewObjectObjects1.length;i<l;++i) {
    if ( gdjs.StartVideoCode.GDNewObjectObjects1[i].isEnded() ) {
        gdjs.StartVideoCode.condition0IsTrue_0.val = true;
        gdjs.StartVideoCode.GDNewObjectObjects1[k] = gdjs.StartVideoCode.GDNewObjectObjects1[i];
        ++k;
    }
}
gdjs.StartVideoCode.GDNewObjectObjects1.length = k;}if (gdjs.StartVideoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StartMenu", false);
}}

}


{


{
}

}


};

gdjs.StartVideoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartVideoCode.GDNewObjectObjects1.length = 0;
gdjs.StartVideoCode.GDNewObjectObjects2.length = 0;

gdjs.StartVideoCode.eventsList0(runtimeScene);
return;

}

gdjs['StartVideoCode'] = gdjs.StartVideoCode;
