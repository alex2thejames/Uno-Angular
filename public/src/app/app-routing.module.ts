import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "lobby", component: LobbyComponent},
  { path: "game", component: GameComponent},
  { path: "**", pathMatch: "full", redirectTo: "/login"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
