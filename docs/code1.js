gdjs.sample_32sceneCode = {};
gdjs.sample_32sceneCode.GDOutputObjects1= [];
gdjs.sample_32sceneCode.GDOutputObjects2= [];
gdjs.sample_32sceneCode.GDPinkBackgroundObjects1= [];
gdjs.sample_32sceneCode.GDPinkBackgroundObjects2= [];
gdjs.sample_32sceneCode.GDFrameObjects1= [];
gdjs.sample_32sceneCode.GDFrameObjects2= [];

gdjs.sample_32sceneCode.conditionTrue_0 = {val:false};
gdjs.sample_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.sample_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.sample_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.sample_32sceneCode.mapOfGDgdjs_46sample_9532sceneCode_46GDFrameObjects1Objects = Hashtable.newFrom({"Frame": gdjs.sample_32sceneCode.GDFrameObjects1});gdjs.sample_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.sample_32sceneCode.GDFrameObjects1);

gdjs.sample_32sceneCode.condition0IsTrue_0.val = false;
gdjs.sample_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.sample_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.sample_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sample_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sample_32sceneCode.mapOfGDgdjs_46sample_9532sceneCode_46GDFrameObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.sample_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sample_32sceneCode.GDFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.sample_32sceneCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.sample_32sceneCode.GDFrameObjects1.length ;i < len;++i) {
    gdjs.sample_32sceneCode.GDFrameObjects1[i].getBehavior("InputCJK_Behavior").OpenInputField((( gdjs.sample_32sceneCode.GDOutputObjects1.length === 0 ) ? "" :gdjs.sample_32sceneCode.GDOutputObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.sample_32sceneCode.GDFrameObjects1);

gdjs.sample_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sample_32sceneCode.GDFrameObjects1.length;i<l;++i) {
    if ( gdjs.sample_32sceneCode.GDFrameObjects1[i].getBehavior("InputCJK_Behavior").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.sample_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.sample_32sceneCode.GDFrameObjects1[k] = gdjs.sample_32sceneCode.GDFrameObjects1[i];
        ++k;
    }
}
gdjs.sample_32sceneCode.GDFrameObjects1.length = k;}if (gdjs.sample_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sample_32sceneCode.GDFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.sample_32sceneCode.GDOutputObjects1);
{for(var i = 0, len = gdjs.sample_32sceneCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.sample_32sceneCode.GDOutputObjects1[i].setString((( gdjs.sample_32sceneCode.GDFrameObjects1.length === 0 ) ? "" :gdjs.sample_32sceneCode.GDFrameObjects1[0].getBehavior("InputCJK_Behavior").String((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.sample_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sample_32sceneCode.GDOutputObjects1.length = 0;
gdjs.sample_32sceneCode.GDOutputObjects2.length = 0;
gdjs.sample_32sceneCode.GDPinkBackgroundObjects1.length = 0;
gdjs.sample_32sceneCode.GDPinkBackgroundObjects2.length = 0;
gdjs.sample_32sceneCode.GDFrameObjects1.length = 0;
gdjs.sample_32sceneCode.GDFrameObjects2.length = 0;

gdjs.sample_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['sample_32sceneCode'] = gdjs.sample_32sceneCode;
