import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DialogModule } from 'primeng/dialog';
import { DragDropModule } from 'primeng/dragdrop';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PanelModule } from 'primeng/panel';
import { SliderModule } from 'primeng/slider';

import { AppComponent } from './app.component';
import { CommandsComponent } from './components/commands/commands.component';
import { BuilderComponent } from './components/builder/builder.component';
import { StreamerComponent } from './components/streamer/streamer.component';
import { AlertComponent } from './components/alert/alert.component';
import { EventAlertComponent } from './components/event-alert/event-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandsComponent,
    BuilderComponent,
    StreamerComponent,
    AlertComponent,
    EventAlertComponent
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DialogModule,
    DragDropModule,
    InputTextModule,
    InputSwitchModule,
    PanelModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
