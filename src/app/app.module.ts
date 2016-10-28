import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeService } from "./recipes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }