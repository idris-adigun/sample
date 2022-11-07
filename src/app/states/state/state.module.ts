import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, NgxsModule.forRoot(), NgxsLoggerPluginModule.forRoot(), NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  exports: [NgxsModule, NgxsLoggerPluginModule, NgxsReduxDevtoolsPluginModule]
})
export class StateModule { }
