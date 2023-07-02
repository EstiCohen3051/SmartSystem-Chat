import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forEach } from 'lodash';
import { Observable, observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Lesson } from 'src/app/Models/Lesson';
import { Teacher } from 'src/app/Models/Teacher';
import { Day, TimeSystem } from 'src/app/Models/TimeSystem';
import { SystemService } from 'src/app/Services/system/system.service';
import { ClassesComponent } from '../classes/classes.component';
import { Classes } from 'src/app/Models/Classes';

@Component({
  selector: 'app-system-filling',
  templateUrl: './system-filling.component.html',
  styleUrls: ['./system-filling.component.scss']
})



export class SystemFillingComponent implements OnInit {
  form: FormGroup<any>[] = []
  classes: Classes[] = [];
  c: string = ""
  constructor(public serviceSystem: SystemService,
    public dialog: MatDialog, private fb: FormBuilder, private snackBar: MatSnackBar) {

  }
  arr: Array<TimeSystem> = new Array<TimeSystem>()
  daysLesson: string[] = ['שיעור', 'ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי']
  days: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי']
  teacher: Array<Teacher> = new Array<Teacher>()
  lessons: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שביעי', 'שמיני', 'תשיעי', 'עשירי']
  ngOnInit() {
    this.serviceSystem.getClass().subscribe(
      res => {
        res.forEach(element => {
          this.classes.push(element);
        });
        console.log(res);
      })
    for (let i = 0, j = 0; i < 60; j++, i++) {
      this.arr.push(new TimeSystem(0, "", 0, 0, "", "", Day.ראשון, "", true))
      const group: FormGroup = this.fb.group({
        subject: new FormControl(this.arr[i].Subject),
        teacher: new FormControl(this.arr[i].TeacherId),
        day: new FormControl(this.days[j % 6]),
        lesson: new FormControl(this.days[(j - (j % 6)) / 6])
      }
      );

      this.form.push(group as any);
    }
    console.log(this.form);

    this.serviceSystem.getTeacher().subscribe(res => {
      this.teacher = res
      this.options1 = res.map(teacher => teacher.Teacher_sName + " " + teacher.Teacher_sLastName)
      this.filteredOptions1 = this.myControl1.valueChanges.pipe(
        startWith(''),
        map(value => this._filter1(value || '')),
      );
      this.serviceSystem.getSubject().subscribe(res1 => {
        this.options2 = res1;
        this.filteredOptions2 = this.myControl2.valueChanges.pipe(
          startWith(''),
          map(value => this._filter2(value || '')),
        );
      })
    })
  }
  arrDay: number[] = [1, 2, 3, 4, 5, 6]
  arrHour: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  myControl1 = new FormControl('');
  myControl2 = new FormControl('');
  options1!: string[];
  options2!: string[];
  arrControl = new FormControl();
  filteredOptions1: Observable<string[]> | undefined;
  filteredOptions2: Observable<string[]> | undefined;
  private _filter1(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options1.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(option => option.toLowerCase().includes(filterValue));
  }
  i = 0; num = 0
  ok() {
    this.arr = new Array<TimeSystem>()

    this.form.forEach((item, index) => {
      console.log(item.value)
      debugger
      if (item.value.subject != "") {
        this.num = (this.days.findIndex(a => a == item.value.day) + 1) * (this.lessons.findIndex(a => a == item.value.lesson) + 1)
        this.arr.push(new TimeSystem(0, this.teacher.find(a => a.Teacher_sName + " " + a.Teacher_sLastName == item.value.teacher)!?.Teacher_sId, this.num, 1, "", item.value.subject, item.value.day, item.value.teacher, true))
        this.arr[this.i].ClassNumber = 1
      }
    })
    this.serviceSystem.addNewSystemFill(this.arr).subscribe(res => {
      if (res)
        this.snackBar.open('המערכת נוספה בהצלחה', 'סגור', {
          duration: 2000, // משך ההודעה במילישניות
        });
    }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClassesComponent, {
      width: '400px',
      data: { options: this.classes }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.c = result;
      console.log(this.c);

    });
  }
}