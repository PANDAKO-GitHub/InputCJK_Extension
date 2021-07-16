
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior = gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior || {};

/**
 * Behavior generated from InputCJK Behavior
 */
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior = class InputCJK_Behavior extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

// Methods:
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.userFunc0x6855c0 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs._InputCJK_Extension) {
    const CSS = document.createElement("style");
    CSS.innerHTML = `
    /*CSS Start ================================================*/
    #InputCJK_Extension_div {
        position: absolute;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        background-color: #ffffff;
        padding: 5vmin;
        top: 0vh;
        right: 5vw;
        left: 5vw;
        bottom: 60vh;
        border-radius: 0px 0px 2vmin 2vmin;
        box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.25);
    }
    #InputCJK_Extension_div input {
        font-size: 6vmin;
        height: 10vh;
    }
    #InputCJK_Extension_div button {
        height: 10vh;
        border-radius: 2vmin;
        background-color: #cccccc;
        border: none;
        font-size: 6vmin;
    }
    /*CSS End ==================================================*/
    `;
    const DIV = document.createElement("div");
    DIV.id = "InputCJK_Extension_div";
    DIV.innerHTML = "<input type='text'><button type='button'>OK</button>";
    document.body.appendChild(CSS);
    document.body.appendChild(DIV);
    //
    gdjs._InputCJK_Extension = {};
    gdjs._InputCJK_Extension.state = 0;
    gdjs._InputCJK_Extension.initialDisplay = getComputedStyle(DIV).display;
    const IPT = document.querySelector("#InputCJK_Extension_div input");
    const BTN = document.querySelector("#InputCJK_Extension_div button");
    gdjs._InputCJK_Extension.onClickOk = function (evt) {
        gdjs._InputCJK_Extension.hide();
        evt.stopPropagation();
    };
    BTN.addEventListener("touchend", gdjs._InputCJK_Extension.onClickOk, false);
    BTN.addEventListener("click", gdjs._InputCJK_Extension.onClickOk, false);
    IPT.addEventListener("touchstart", (evt) => {evt.stopPropagation();}, false);
    IPT.addEventListener("touchmove", (evt) => {evt.stopPropagation();}, false);
    IPT.addEventListener("touchend", (evt) => {evt.stopPropagation();}, false);
    //
    gdjs._InputCJK_Extension.show = function (STR) {
        IPT.value = STR;
        DIV.style.display = this.initialDisplay;
    };
    gdjs._InputCJK_Extension.hide = function () {
        DIV.style.display = "none";
    };
    gdjs._InputCJK_Extension.hide();
}

};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.userFunc0x6855c0(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.userFunc0x708020 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._InputCJK_Extension) {
    const E = document.getElementById("InputCJK_Extension_div");
    const S = gdjs._InputCJK_Extension.state;
    //0=Close, 1=Open, 2=Closing(Finished)
    if (S === 0) {
        if (E.style.display != "none") {
            gdjs._InputCJK_Extension.state = 1;
        }
    } else if (S === 1) {
        if (E.style.display == "none") {
            gdjs._InputCJK_Extension.state = 2;
        }
    } else if (S === 2) {
        gdjs._InputCJK_Extension.state = 0;
    }
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.userFunc0x708020(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.userFunc0x6966f8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._InputCJK_Extension) {
    gdjs._InputCJK_Extension.show(eventsFunctionContext.getArgument("String"));
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.userFunc0x6966f8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputField = function(String, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "String") return String;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.OpenInputFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.userFunc0x6961b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if (gdjs._InputCJK_Extension) {
    gdjs._InputCJK_Extension.hide();
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.userFunc0x6961b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputField = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.CloseInputFieldContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.userFunc0x68bdf0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const E = document.querySelector("#InputCJK_Extension_div input");
if (E) {
    E.value = eventsFunctionContext.getArgument("String");
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.userFunc0x68bdf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetString = function(String, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "String") return String;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.SetStringContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.userFunc0x68bdf0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = "";
const E = document.querySelector("#InputCJK_Extension_div input");
if (E) {
    eventsFunctionContext.returnValue = E.value;
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.userFunc0x68bdf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.String = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.StringContext.eventsList0(runtimeScene, eventsFunctionContext);
return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.userFunc0x68bdf0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = false;
const E = document.getElementById("InputCJK_Extension_div");
if (E) {
    if (E.style.display != "none") {
        eventsFunctionContext.returnValue = true;
    }
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.userFunc0x68bdf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpen = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsOpenContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.userFunc0x68bdf0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = false;
const E = document.getElementById("InputCJK_Extension_div");
if (E) {
    if (E.style.display == "none") {
        eventsFunctionContext.returnValue = true;
    }
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.userFunc0x68bdf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsClose = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsCloseContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext = {};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.GDObjectObjects1= [];

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.userFunc0x68bdf0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = false;
if (gdjs._InputCJK_Extension) {
    if (gdjs._InputCJK_Extension.state === 2) {
        eventsFunctionContext.returnValue = true;
    }
}
};
gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.userFunc0x68bdf0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinished = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.IsFinishedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("InputCJK_Extension::InputCJK_Behavior", gdjs.evtsExt__InputCJK_Extension__InputCJK_Behavior.InputCJK_Behavior);
