import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Nasi Goreng Aceh",
      "akak",
      "https://merahputih.com/media/9e/57/b0/9e57b080b8939dd3ad4a5f676f640234.jpg"
    ),
    new Recipe(
      "Nasi Goreng Aceh",
      "akak",
      "https://merahputih.com/media/9e/57/b0/9e57b080b8939dd3ad4a5f676f640234.jpg"
    )    
  ];

  constructor() {}

  ngOnInit(): void {}
}
