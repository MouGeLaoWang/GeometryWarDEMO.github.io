gdjs.New_32scene4Code = {};
gdjs.New_32scene4Code.GDGeoBaseCarObjects1= [];
gdjs.New_32scene4Code.GDGeoBaseCarObjects2= [];
gdjs.New_32scene4Code.GDNewObject2Objects1= [];
gdjs.New_32scene4Code.GDNewObject2Objects2= [];
gdjs.New_32scene4Code.GDNewObject3Objects1= [];
gdjs.New_32scene4Code.GDNewObject3Objects2= [];
gdjs.New_32scene4Code.GDUITextObjects1= [];
gdjs.New_32scene4Code.GDUITextObjects2= [];
gdjs.New_32scene4Code.GDUIImageObjects1= [];
gdjs.New_32scene4Code.GDUIImageObjects2= [];
gdjs.New_32scene4Code.GDSetupButtonObjects1= [];
gdjs.New_32scene4Code.GDSetupButtonObjects2= [];
gdjs.New_32scene4Code.GDSetBaseObjects1= [];
gdjs.New_32scene4Code.GDSetBaseObjects2= [];
gdjs.New_32scene4Code.GDGeoBaseObjects1= [];
gdjs.New_32scene4Code.GDGeoBaseObjects2= [];

gdjs.New_32scene4Code.conditionTrue_0 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition3IsTrue_0 = {val:false};
gdjs.New_32scene4Code.conditionTrue_1 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene4Code.condition2IsTrue_1 = {val:false};
gdjs.New_32scene4Code.condition3IsTrue_1 = {val:false};


gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDGeoBaseCarObjects1Objects = Hashtable.newFrom({"GeoBaseCar": gdjs.New_32scene4Code.GDGeoBaseCarObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDSetupButtonObjects1Objects = Hashtable.newFrom({"SetupButton": gdjs.New_32scene4Code.GDSetupButtonObjects1});gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDSetBaseObjects1Objects = Hashtable.newFrom({"SetBase": gdjs.New_32scene4Code.GDSetBaseObjects1});gdjs.New_32scene4Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GeoBase"), gdjs.New_32scene4Code.GDGeoBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);
gdjs.copyArray(runtimeScene.getObjects("SetupButton"), gdjs.New_32scene4Code.GDSetupButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIImage"), gdjs.New_32scene4Code.GDUIImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIText"), gdjs.New_32scene4Code.GDUITextObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDUITextObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDUITextObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDUIImageObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDUIImageObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDSetupButtonObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetupButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDSetBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetBaseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
gdjs.New_32scene4Code.condition2IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDGeoBaseCarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.New_32scene4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].isVisible() ) {
        gdjs.New_32scene4Code.condition2IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDGeoBaseCarObjects1[k] = gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length = k;}}
}
if (gdjs.New_32scene4Code.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDGeoBaseCarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SetupButton"), gdjs.New_32scene4Code.GDSetupButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIImage"), gdjs.New_32scene4Code.GDUIImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIText"), gdjs.New_32scene4Code.GDUITextObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDUITextObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDUITextObjects1[i].setString("几何战争基地车");
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDUIImageObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDUIImageObjects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDSetupButtonObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetupButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition0IsTrue_0;
gdjs.New_32scene4Code.condition0IsTrue_1.val = false;
gdjs.New_32scene4Code.condition1IsTrue_1.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].getAnimationFrame() == 1 ) {
        gdjs.New_32scene4Code.condition0IsTrue_1.val = true;
        gdjs.New_32scene4Code.GDGeoBaseCarObjects1[k] = gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length = k;}if ( gdjs.New_32scene4Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].getAnimationFrame() == 0 ) {
        gdjs.New_32scene4Code.condition1IsTrue_1.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}}
gdjs.New_32scene4Code.conditionTrue_1.val = true && gdjs.New_32scene4Code.condition0IsTrue_1.val && gdjs.New_32scene4Code.condition1IsTrue_1.val;
}
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].isCollidingWithPoint((( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointY(""))) ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDGeoBaseCarObjects1 */
/* Reuse gdjs.New_32scene4Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].isVisible() ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].getAnimationFrame() == 0 ) {
        gdjs.New_32scene4Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
/* Reuse gdjs.New_32scene4Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].addForceTowardObject((gdjs.New_32scene4Code.GDNewObject2Objects1.length !== 0 ? gdjs.New_32scene4Code.GDNewObject2Objects1[0] : null), 150, 0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].rotateTowardAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].getPointX("")), (gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].getPointY("")), (( gdjs.New_32scene4Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject2Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject2Objects1[0].getPointY(""))) + 90, 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].isCollidingWithPoint((( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointY(""))) ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene4Code.conditionTrue_1 = gdjs.New_32scene4Code.condition1IsTrue_0;
gdjs.New_32scene4Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9348108);
}
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDGeoBaseCarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SetupButton"), gdjs.New_32scene4Code.GDSetupButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIImage"), gdjs.New_32scene4Code.GDUIImageObjects1);
gdjs.copyArray(runtimeScene.getObjects("UIText"), gdjs.New_32scene4Code.GDUITextObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDUITextObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDUITextObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDUIImageObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDUIImageObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDSetupButtonObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetupButtonObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SetupButton"), gdjs.New_32scene4Code.GDSetupButtonObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDSetupButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDSetBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetBaseObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDSetBaseObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDSetBaseObjects1[i].isVisible() ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDSetBaseObjects1[k] = gdjs.New_32scene4Code.GDSetBaseObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDSetBaseObjects1.length = k;}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDSetBaseObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDSetBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetBaseObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene4Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDSetBaseObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);
/* Reuse gdjs.New_32scene4Code.GDSetBaseObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject2Objects1[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDSetBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetBaseObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingDown(runtimeScene);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDSetBaseObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDSetBaseObjects1[i].isVisible() ) {
        gdjs.New_32scene4Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDSetBaseObjects1[k] = gdjs.New_32scene4Code.GDSetBaseObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDSetBaseObjects1.length = k;}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDSetBaseObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDSetBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetBaseObjects1[i].rotate(1500, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDSetBaseObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDSetBaseObjects1[i].isVisible() ) {
        gdjs.New_32scene4Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDSetBaseObjects1[k] = gdjs.New_32scene4Code.GDSetBaseObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDSetBaseObjects1.length = k;}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDSetBaseObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDSetBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDSetBaseObjects1[i].rotate(-(1500), runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].isVisible() ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].getAnimationFrame() == 1 ) {
        gdjs.New_32scene4Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
/* Reuse gdjs.New_32scene4Code.GDNewObject2Objects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].addForceTowardObject((gdjs.New_32scene4Code.GDNewObject2Objects1.length !== 0 ? gdjs.New_32scene4Code.GDNewObject2Objects1[0] : null), 150, 0);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].rotateTowardAngle(gdjs.evtTools.common.angleBetweenPositions((gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].getPointX("")), (gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].getPointY("")), (( gdjs.New_32scene4Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject2Objects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDNewObject2Objects1[0].getPointY(""))) + 90, 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].getAnimationFrame() == 1 ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].isCollidingWithPoint((( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointY(""))) ) {
        gdjs.New_32scene4Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}}
if (gdjs.New_32scene4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDGeoBaseCarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("SetBase"), gdjs.New_32scene4Code.GDSetBaseObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].rotateTowardAngle((( gdjs.New_32scene4Code.GDSetBaseObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDSetBaseObjects1[0].getDirectionOrAngle()), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].playAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GeoBaseCar"), gdjs.New_32scene4Code.GDGeoBaseCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
gdjs.New_32scene4Code.condition1IsTrue_0.val = false;
gdjs.New_32scene4Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene4Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDGeoBaseCarObjects1[k] = gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length = k;}if ( gdjs.New_32scene4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].getAnimationFrame() == 1 ) {
        gdjs.New_32scene4Code.condition1IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}if ( gdjs.New_32scene4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32scene4Code.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32scene4Code.GDNewObject2Objects1[i].isCollidingWithPoint((( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointX("")), (( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointY(""))) ) {
        gdjs.New_32scene4Code.condition2IsTrue_0.val = true;
        gdjs.New_32scene4Code.GDNewObject2Objects1[k] = gdjs.New_32scene4Code.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32scene4Code.GDNewObject2Objects1.length = k;}}
}
if (gdjs.New_32scene4Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GeoBase"), gdjs.New_32scene4Code.GDGeoBaseObjects1);
/* Reuse gdjs.New_32scene4Code.GDGeoBaseCarObjects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseObjects1[i].setPosition((( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointX("")),(( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseObjects1[i].setAngle((( gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length === 0 ) ? 0 :gdjs.New_32scene4Code.GDGeoBaseCarObjects1[0].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDGeoBaseCarObjects1[i].hide();
}
}}

}


};

gdjs.New_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene4Code.GDGeoBaseCarObjects1.length = 0;
gdjs.New_32scene4Code.GDGeoBaseCarObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene4Code.GDUITextObjects1.length = 0;
gdjs.New_32scene4Code.GDUITextObjects2.length = 0;
gdjs.New_32scene4Code.GDUIImageObjects1.length = 0;
gdjs.New_32scene4Code.GDUIImageObjects2.length = 0;
gdjs.New_32scene4Code.GDSetupButtonObjects1.length = 0;
gdjs.New_32scene4Code.GDSetupButtonObjects2.length = 0;
gdjs.New_32scene4Code.GDSetBaseObjects1.length = 0;
gdjs.New_32scene4Code.GDSetBaseObjects2.length = 0;
gdjs.New_32scene4Code.GDGeoBaseObjects1.length = 0;
gdjs.New_32scene4Code.GDGeoBaseObjects2.length = 0;

gdjs.New_32scene4Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene4Code'] = gdjs.New_32scene4Code;
