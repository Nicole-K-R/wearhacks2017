// JavaScript source code

var toDo: String;
var inputField : UnityEngine.UI.InputField;
var displayName : UnityEngine.UI.Text;
var here : Array = [];

function Update () {
    toDo=inputField.text;
    displayName.text=toDo;

    if (Input.GetKeyDown(KeyCode.Return)) {
        here.push(toDo);
        Debug.Log (here);
    }
}

