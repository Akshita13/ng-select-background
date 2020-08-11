import { Component, NgModule, ViewChild } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgSelectModule, NgOption } from "@ng-select/ng-select";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  NgForm
} from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  public high = true;
  conditions = [
    { id: 1, name: "if" },
    { id: 2, name: "end" },
    { id: 3, name: "delete cookies" },
    { id: 4, name: "delete" },
    { id: 5, name: "aaaaa" }
  ];

  addForm;
  storedIndex=[]
  array=[]
  startIndex:number
endIndex:number
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      rows: this.fb.array([])
    });
    this.initGroup();
  }
  initGroup() {
    let rows = this.addForm.get("rows") as FormArray;
    rows.push(
      this.fb.group({
        condition: [""]
      })
    );
  }

  onDeleteRow(i) {
    let rows = this.addForm.get("rows") as FormArray;
    rows.removeAt(i);
  }

  applyClass(i){
    console.log(i,)
    return this.storedIndex.indexOf(i)==-1
  }

  onSelectValue(value,i){
    console.log(value,"value",i)
const result= this.storedIndex.filter(item => item==i);
// if(result){
for(let i=this.startIndex;i<=this.endIndex;i++){
  this.storedIndex.push(i)
// }

}
// this.storedIndex=result
console.log(result,"result")
    if(value.name==="if"){
      // this.storedIndex.push({i:i,name:value.name})
      // this.storedIndex=[]
      console.log(this.storedIndex,"storedindex")
      this.storedIndex.push(i)
 

      this.array.push({i:i,name:value.name})
           this.array.forEach((e1)=>{
       Object.keys(e1).forEach(key => {
  // console.log(key, e1[key],'=====');
      console.log(e1[key],"e1[key]...ii")
      // let arr1;
      // arr1.push(e1[key])
      // console.log(arr1,"arr1")
      debugger
      if(key==='i'){
        
  if(e1[key]===i){
    // if(e1[key]===i){
      this.storedIndex=[]
      console.log(e1[key],"e1[key]")
      this.storedIndex.push(e1[key])
    // }
  }
      }
});
})
      this.startIndex=i;
      console.log(this.array,"arr")

      // console.log(this.storedIndex)
    }else if(value.name==='end'){
      // this.storedIndex=[]
      this.storedIndex.push(i)
      this.array.push({i:i,name:value.name})
      // console.log(this.array,"arr")
           this.array.forEach((e1)=>{
       Object.keys(e1).forEach(key => {
  console.log(key, e1[key],'=====');
  // if(key==="if"){
  //   e1[key]===i
  // }
});
    })
      this.endIndex=i
    console.log(this.storedIndex)
    }

  
}
}