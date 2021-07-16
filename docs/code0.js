gdjs.multiple_32sceneCode = {};
gdjs.multiple_32sceneCode.GDOutputObjects1= [];
gdjs.multiple_32sceneCode.GDOutputObjects2= [];
gdjs.multiple_32sceneCode.GDInputCJKObjects1= [];
gdjs.multiple_32sceneCode.GDInputCJKObjects2= [];
gdjs.multiple_32sceneCode.GDPinkBackgroundObjects1= [];
gdjs.multiple_32sceneCode.GDPinkBackgroundObjects2= [];
gdjs.multiple_32sceneCode.GDFrameObjects1= [];
gdjs.multiple_32sceneCode.GDFrameObjects2= [];

gdjs.multiple_32sceneCode.conditionTrue_0 = {val:false};
gdjs.multiple_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.multiple_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.multiple_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.multiple_32sceneCode.condition3IsTrue_0 = {val:false};


gdjs.multiple_32sceneCode.mapOfGDgdjs_46multiple_9532sceneCode_46GDFrameObjects1Objects = Hashtable.newFrom({"Frame": gdjs.multiple_32sceneCode.GDFrameObjects1});gdjs.multiple_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Frame"), gdjs.multiple_32sceneCode.GDFrameObjects1);
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.multiple_32sceneCode.GDOutputObjects1);

gdjs.multiple_32sceneCode.condition0IsTrue_0.val = false;
gdjs.multiple_32sceneCode.condition1IsTrue_0.val = false;
gdjs.multiple_32sceneCode.condition2IsTrue_0.val = false;
{
gdjs.multiple_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.multiple_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.multiple_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.multiple_32sceneCode.mapOfGDgdjs_46multiple_9532sceneCode_46GDFrameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.multiple_32sceneCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.multiple_32sceneCode.GDOutputObjects1.length;i<l;++i) {
    if ( gdjs.multiple_32sceneCode.GDOutputObjects1[i].getVariableNumber(gdjs.multiple_32sceneCode.GDOutputObjects1[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.multiple_32sceneCode.GDFrameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.multiple_32sceneCode.GDFrameObjects1[0].getVariables()).getFromIndex(0))) ) {
        gdjs.multiple_32sceneCode.condition2IsTrue_0.val = true;
        gdjs.multiple_32sceneCode.GDOutputObjects1[k] = gdjs.multiple_32sceneCode.GDOutputObjects1[i];
        ++k;
    }
}
gdjs.multiple_32sceneCode.GDOutputObjects1.length = k;}}
}
if (gdjs.multiple_32sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.multiple_32sceneCode.GDFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("InputCJK"), gdjs.multiple_32sceneCode.GDInputCJKObjects1);
/* Reuse gdjs.multiple_32sceneCode.GDOutputObjects1 */
{for(var i = 0, len = gdjs.multiple_32sceneCode.GDInputCJKObjects1.length ;i < len;++i) {
    gdjs.multiple_32sceneCode.GDInputCJKObjects1[i].getBehavior("InputCJK_Behavior").OpenInputField((( gdjs.multiple_32sceneCode.GDOutputObjects1.length === 0 ) ? "" :gdjs.multiple_32sceneCode.GDOutputObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.multiple_32sceneCode.GDInputCJKObjects1.length ;i < len;++i) {
    gdjs.multiple_32sceneCode.GDInputCJKObjects1[i].returnVariable(gdjs.multiple_32sceneCode.GDInputCJKObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.multiple_32sceneCode.GDFrameObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.multiple_32sceneCode.GDFrameObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InputCJK"), gdjs.multiple_32sceneCode.GDInputCJKObjects1);
gdjs.copyArray(runtimeScene.getObjects("Output"), gdjs.multiple_32sceneCode.GDOutputObjects1);

gdjs.multiple_32sceneCode.condition0IsTrue_0.val = false;
gdjs.multiple_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.multiple_32sceneCode.GDInputCJKObjects1.length;i<l;++i) {
    if ( gdjs.multiple_32sceneCode.GDInputCJKObjects1[i].getBehavior("InputCJK_Behavior").IsFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.multiple_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.multiple_32sceneCode.GDInputCJKObjects1[k] = gdjs.multiple_32sceneCode.GDInputCJKObjects1[i];
        ++k;
    }
}
gdjs.multiple_32sceneCode.GDInputCJKObjects1.length = k;}if ( gdjs.multiple_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.multiple_32sceneCode.GDOutputObjects1.length;i<l;++i) {
    if ( gdjs.multiple_32sceneCode.GDOutputObjects1[i].getVariableNumber(gdjs.multiple_32sceneCode.GDOutputObjects1[i].getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.multiple_32sceneCode.GDInputCJKObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.multiple_32sceneCode.GDInputCJKObjects1[0].getVariables()).getFromIndex(0))) ) {
        gdjs.multiple_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.multiple_32sceneCode.GDOutputObjects1[k] = gdjs.multiple_32sceneCode.GDOutputObjects1[i];
        ++k;
    }
}
gdjs.multiple_32sceneCode.GDOutputObjects1.length = k;}}
if (gdjs.multiple_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.multiple_32sceneCode.GDInputCJKObjects1 */
/* Reuse gdjs.multiple_32sceneCode.GDOutputObjects1 */
{for(var i = 0, len = gdjs.multiple_32sceneCode.GDOutputObjects1.length ;i < len;++i) {
    gdjs.multiple_32sceneCode.GDOutputObjects1[i].setString((( gdjs.multiple_32sceneCode.GDInputCJKObjects1.length === 0 ) ? "" :gdjs.multiple_32sceneCode.GDInputCJKObjects1[0].getBehavior("InputCJK_Behavior").String((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


};

gdjs.multiple_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.multiple_32sceneCode.GDOutputObjects1.length = 0;
gdjs.multiple_32sceneCode.GDOutputObjects2.length = 0;
gdjs.multiple_32sceneCode.GDInputCJKObjects1.length = 0;
gdjs.multiple_32sceneCode.GDInputCJKObjects2.length = 0;
gdjs.multiple_32sceneCode.GDPinkBackgroundObjects1.length = 0;
gdjs.multiple_32sceneCode.GDPinkBackgroundObjects2.length = 0;
gdjs.multiple_32sceneCode.GDFrameObjects1.length = 0;
gdjs.multiple_32sceneCode.GDFrameObjects2.length = 0;

gdjs.multiple_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['multiple_32sceneCode'] = gdjs.multiple_32sceneCode;
