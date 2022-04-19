import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { CoursesService } from "./courses.service";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
@Component(
    {   selector: "course",
        templateUrl: "courses.component.html",
        encapsulation: ViewEncapsulation.Emulated, //used for shadow DOM
        styleUrls: ['./courses.component.css']
      }  
)
export class CourseComponent {
    course_name = "Angular nibba to pro";
    instructors!:any;
    faheart = faHeart;
    xdata!: string;
    user_data_value!: string;
    is_active = true;
    @Input() is_favourite = false;
    @Output() changed = new EventEmitter();
    previous_data = '';
    is_liked = false;
    count = 0;
    service: CoursesService = new CoursesService;
    test = "Here I'm going to use custom pipe named custompipe created by my own, please summary.pipe.ts for more details."
    constructor (){
        //this.instructors = [];
    }
    // This is for Event Handling
    Onclick($event:any){
        $event.stopPropagation();
        console.log("The submit button is clicked.");
    }
    loadinstructors(){
        this.instructors = this.service.getInstructors();
    }
    trackInstructors(index : any, instructor: any){
        return instructor ? instructor : undefined;
    }
    Ondiv(){
        console.log("I'm at the div block.");
    }
    onKeyUp(){
        console.log("Enter key is pressed.");
    }
    onKeyUp_withevent(eventvalue: any){
        let x = eventvalue;
        console.log("The value of the event is"+ ""+ x.key + "" + x.target.value);
        this.xdata = eventvalue.target.value;
    }
    onKeyup_withtemplatevariable(value: any){
        this.user_data_value = value;
    }
    onKeyup_two_way_binding(){
        console.log(this.xdata);
    }
    Favourite(){
        this.is_favourite = !this.is_favourite;
        console.log("In the favourite method.")
        this.changed.emit();

    }
    Rich_format_edit(){
        
        if (this.previous_data.length){
            let last_char = this.previous_data.charAt(this.previous_data.length-2);
            console.log("Last char"+"'"+last_char+"'");
            console.log("for the:"+this.previous_data.substring(this.previous_data.length-4) + ":");
            if (last_char == " "){
                
                this.previous_data = this.previous_data.substring(0,this.previous_data.length-1) + this.previous_data.charAt(this.previous_data.length-1).toUpperCase();
                console.log("In if block.");
                if (this.previous_data.substring(this.previous_data.length-4)=="The "){
                    this.previous_data= this.previous_data.substring(0,this.previous_data.length-5)+"the ";
                    console.log("In the state");
                 }
            }
            else{
                this.previous_data = this.previous_data.substring(0,this.previous_data.length-1) + this.previous_data.charAt(this.previous_data.length-1).toLowerCase();
            }
            if (last_char==""){
                this.previous_data = this.previous_data.charAt(this.previous_data.length-1).toUpperCase();
            }
        }
        else{
            this.previous_data += this.previous_data.toUpperCase();
            console.log("In else block.");
        }
    }
    Tweet(){
        this.is_liked = !this.is_liked;
        this.count += this.is_liked? 1 : -1; 
    }
}