import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import { TitleComponent }       from './title.component';
import { Logger }               from './logger.service';
import { UserService }          from './user.service';

@NgModule({
  imports:      [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ TitleComponent ],
  exports:      [ TitleComponent ],
  providers:    [ Logger, UserService ]
})
export class CoreModule { }
