import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TimeSystem } from 'src/app/Models/TimeSystem';
import { SystemService } from 'src/app/Services/system/system.service';

@Component({
  selector: 'app-permanent-system',
  templateUrl: './permanent-system.component.html',
  styleUrls: ['./permanent-system.component.scss']
})
export class PermanentSystemComponent {
  constructor(private system: SystemService) {
    debugger
    system.getSystem().subscribe(
      res => {
        this.TimeSystem = res
        console.log(res);
      }
    )
  }
  displayedColumns: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday'];
  dataSource = new MatTableDataSource();
  TimeSystem: TimeSystem[] = new Array<TimeSystem>()
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
