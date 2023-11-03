// ��������� ��������� �������� �������   
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");   
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");   
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");   
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");   
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");   
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");   
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");   
   
// ������ ��������� ������ ��� �����   
BreackGraph.BreackAll = true;   
// ���������� ���������� ������   
Ui.GetContext().QuadsCount.Value = true;   
// ��� ������������ �����   
Build.GetContext().Pipette.Value = true;   
Build.GetContext().BalkLenChange.Value = false;   
Build.GetContext().SetSkyEnable.Value = true;   
Build.GetContext().GenMapEnable.Value = true;   
Build.GetContext().ChangeCameraPointsEnable.Value = true;   
Build.GetContext().QuadChangeEnable.Value = false;   
Build.GetContext().BuildModeEnable.Value = false;   
Build.GetContext().CollapseChangeEnable.Value = false;   
Build.GetContext().RenameMapEnable.Value = true;   
Build.GetContext().ChangeMapAuthorsEnable.Value = true;   
Build.GetContext().LoadMapEnable.Value = true;   
Build.GetContext().ChangeSpawnsEnable.Value = true;   
   
// ��������� ����   
Properties.GetContext().GameModeName.Value = "GameModes/Peace";   
// ������� �������   
red = GameMode.Parameters.GetBool("RedTeam");   
blue = GameMode.Parameters.GetBool("BlueTeam");   
if (red || !red && !blue) {   
 Teams.Add("Red", "обычный чел", { r: 135, g: 22, b: 112 });   
 Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);   
}   
if (blue || !red && !blue) {   
 Teams.Add("Blue", "про", { g: 1 });   
 Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(2);   
 if(GameMode.Parameters.GetBool("BlueHasNothing")){   
  var inventory = Inventory.GetContext();   
  Teams.Get("Blue").Inventory.Main.Value = false;   
  Teams.Get("Blue").Inventory.Secondary.Value = false;   
  Teams.Get("Blue").Inventory.Melee.Value = true;   
  Teams.Get("Blue").Inventory.Explosive.Value = false;   
  Teams.Get("Blue").Inventory.Build.Value = false; Teams.Add("Blue", "шлюха", { g: 1 });   
   
   
 }Teams.Add("чел", "нубик!", {  r: 0, g: 1, b: 1 }); Teams.Add("топчик", "Kalesa_V", { r: 1, g: 1, b: 1 }); Teams.Add("ты", "бот", { b: 1 });   
   
   
   
   
}   
   
// ��������� ���� � ������� �� �������   
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);   
Ui.GetContext().Hint.Value = player +"привет";   
if (player.id  == "B300ADBF79CAB37D" || player.id == "14969E54D5C49DED"){   
player.inventory.MainInfinity.Value = true;   
player.inventory.Main.Value = true;   
player.inventory.Melee.Value = true;   
player.inventory.Explosive.Value = true;   
player.inventory.Build.Value = true;   
player.inventory.BuildInfinity.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.SecondaryInfinity.Value = true;
player.inventory.Secondary.Value = true;
player.Build.FloodFill.Value = true;   
player.Build.FillQuad.Value = true;   
player.Build.RemoveQuad.Value = true;   
player.Build.BalkLenChange.Value = true;   
player.Build.FlyEnable.Value = true;   
player.Build.SetSkyEnable.Value = true;   
player.Build.GenMapEnable.Value = true;   
player.Build.ChangeCameraPointsEnable.Value = true;   
player.Build.QuadChangeEnable.Value = true;   
player.Build.BuildModeEnable.Value = true;   
player.Build.CollapseChangeEnable.Value = true;   
player.Build.RenameMapEnable.Value = true;   
player.Build.ChangeMapAuthorsEnable.Value = true;   
player.Build.LoadMapEnable.Value = true;   
player.Build.ChangeSpawnsEnable.Value = true;
player.Build.BuildRangeEnable.Value = true; 
var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger"); 
 
adminTrigger.Tags = ["admin"];  
  
adminTrigger.Enable = true;   
adminTrigger.OnEnter.Add(function(player) {   
 player.inventory.Main.Value = false; 
 player.inventory.MainInfinity.Value = false;   
 player.inventory.Secondary.Value = true; 
player.inventory.SecondaryInfinity.Value = true;   
 player.inventory.Melee.Value = true;   
 player.inventory.Explosive.Value = false;   
player.inventory.ExplosiveInfinity.Value = false;   
 player.inventory.Build.Value = false;   
 player.inventory.BuildInfinity.Value = false;   
 player.Build.FlyEnable.Value = false;   
});   
 }   
});                                                                                                  
// ����� �� ����� � �������   
Teams.OnPlayerChangeTeam.Add(function(player){player.Spawns.Spawn()});
   
//    
var des = "<size=100>k<color=#00FFF8>a</color>l<color=#FFA600>e</color><color=#00FF25>s</color>a<color=#FF0000>V</color></size>";    
Teams.Get("Red").Properties.Get("Des").Value = des;   
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Des" };    
Teams.Get("Blue").Properties.Get("Des").Value = des;   
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Des" };   
   
   
// ������ ���������   
Ui.getContext().Hint.Value = "калеса"; 
  
   
// ������������ ���������   
var inventory = Inventory.GetContext();   
inventory.Main.Value = false;   
inventory.Secondary.Value = false;   
inventory.Melee.Value = false;   
inventory.Explosive.Value = false;   
inventory.Build.Value = false;   
inventory.BuildInfinity.Value = false;   
   
// ��������� ��� ������ �����   
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;   
   
// ������������ �����   
Spawns.GetContext().RespawnTime.Value = 2;   
   
restartTrigger = AreaPlayerTriggerService.Get("RestartTrigger");   restartTrigger.Tags = ["restart"];   restartTrigger.Enable = true;   restartTrigger.OnEnter.Add(function(player) {    Game.RestartGame();   });    
   
BreackGraph.WeakBlocks = false;   
   
BreackGraph.OnlyPlayerBlocksDmg = true;BlocksDmg = false;

Players.Get("B300ADBF79CAB37D").Damage.DamageIn.Value = false

// LeaderBoard   
LeaderBoard.PlayerLeaderBoardValues = [{   
Value: "C",   
DisplayName: "Деньги"   
},
{
  Value: "S",
  DisplayName: "пропуски"
},
{
  Value: "death",
  DisplayName: "смерти"
};      

var praAreaTag = "пропуск"; 
var ViewsParameterName = "Vivews"; 
var praAreas = AreaService.GetByTag(praAreaTag); 
var praView = AreaViewService.GetContext().Get("praView"); 
praView.Color = {b:1}; 
praView.Tags = ["praAreaTag"]; 
praView.Enable = true; 
var praTrigger = AreaPlayerTriggerService.Get("praTrigger"); 
praTrigger.Tags = ["praAreaTag"]; 
praTrigger.Enable = true; 
praTrigger.OnEnter.Add(function (player) {     
      if (player.Properties.Get("C").Value > 10000) {
        player.Ui.Hint.Value = "ты купил пропуск/повышение";
        player.Properties.Get("S").Value += 1;
        player.Properties.Get("C").Value -= 10000;
      } else {
         player.Ui.Hint.Value = "надо 10000 на пропуск/повышение, а у тебя: " + player.Properties.Get("S").Value;
}
});

var dsTrigger = AreaPlayerTriggerService.Get("g4gsh");
dsTrigger.Tags = ["пр1"];
dsTrigger.Enable = true; 
dsTrigger.OnExit.Add(function(player,System){
if (player.Properties.Get("S").Value > 2){
player.Ui.Hint.Value = "ты прошел с пропуском !";
}else{player.Ui.Hint.Value = "у тебя нет пропуска 2";
player.Spawns.Spawn(); 
}
});

var PvP =     
AreaPlayerTriggerService.Get("block");    
PvP.Tags = ["block"];    
PvP.Enable = false;    
PvP.OnEnter.Add(function (player) {    
player.inventory.Build.Value = true;   
player.inventory.BuildInfinity.Value = true;
player.inventory.Melee..value = true;
});   
var PvP =     
AreaPlayerTriggerService.Get("block");    
PvP.Tags = ["block"];    
PvP.Enable = true;   
PvP.OnExit.Add(function (player) {   
player.inventory.Build.Value = false; 
player.inventory.BuildInfinity.Value = false;
player.inventory.Melee.value = false;
  }
});                              

var Farm = AreaPlayerTriggerService.Get("yp1");    
Farm.Tags = ["ур1"];    
Farm.Enable = true;    
Farm.OnEnter.Add(function(player){   
player.Ui.Hint.Value = "+500";   
player.Properties.Get("C").Value += 500;   
Farm.OnExit.Add(function(player){
player.Spawns.Spawn();
});   

var dsTrigger = AreaPlayerTriggerService.Get("g4вsh");
dsTrigger.Tags = ["пр2"];
dsTrigger.Enable = true; 
dsTrigger.OnExit.Add(function(player,System){
if (player.Properties.Get("S").Value > 5){
player.Ui.Hint.Value = "ты прошел с пропуском !";
}else{player.Ui.Hint.Value = "у тебя нет пропуска 5";
player.Spawns.Spawn(); 
}
});

var dsTrigger = AreaPlayerTriggerService.Get("g4ыgsh");
dsTrigger.Tags = ["пр3"];
dsTrigger.Enable = true; 
dsTrigger.OnExit.Add(function(player,System){
if (player.Properties.Get("S").Value > 10){
player.Ui.Hint.Value = "ты прошел с пропуском !";
}else{player.Ui.Hint.Value = "у тебя нет пропуска 10";
player.Spawns.Spawn(); 
}
});

var dsTrigger = AreaPlayerTriggerService.Get("g4g1sh");
dsTrigger.Tags = ["пр4"];
dsTrigger.Enable = true; 
dsTrigger.OnExit.Add(function(player,System){
if (player.Properties.Get("S").Value > 20){
player.Ui.Hint.Value = "ты прошел с пропуском !";
}else{player.Ui.Hint.Value = "у тебя нет пропуска 20";
player.Spawns.Spawn(); 
}
});

var dsTrigger = AreaPlayerTriggerService.Get("g4gsфh");
dsTrigger.Tags = ["пр5"];
dsTrigger.Enable = true; 
dsTrigger.OnExit.Add(function(player,System){
if (player.Properties.Get("S").Value > 30){
player.Ui.Hint.Value = "ты прошел с пропуском !";
}else{player.Ui.Hint.Value = "у тебя нет пропуска 30";
player.Spawns.Spawn(); 
}
});
