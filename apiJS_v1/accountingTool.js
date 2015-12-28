// JavaScript Document
var accountingTool = {
	//FIRST IN FIRST OUT
	FIFO : function(QUANITY,PRICE){
		"use strict";
		alert(QUANITY,PRICE);
	},
	
	
	//COSTS Category and Calculation
	COSTS : {
	
	variableCost : {
		Category : "Variable Cost",
		Result : {
		CostTitle : [],
		Amount :[]	
		}
	},
	
	fixedCost : {
		Category : "Fixed Cost",
		Result : {
		CostTitle : [],
		Amount :[]	
		}
	},
	
	mixedCost : {
		Category : "Mixed Cost",
		
		Result : {
		CostTitle : [],
		mixedFixedCost : [],
		mixedVariableCost : []
		}
	},
	
	costsDetermine : function(costTitle,costOne,activityLevelOne,costTwo,activityLevelTwo){
		"use strict";
		
		if (costOne === costTwo){
			accountingTool.COSTS.fixedCost.Result.Amount.push(costOne);
			
			accountingTool.COSTS.fixedCost.Result.CostTitle.push(costTitle);
			
			console.log(accountingTool.COSTS.fixedCost);
		
		}else{
			var costPerUnitOne = costOne/activityLevelOne;
			
			var costPerUnitTwo = costTwo/activityLevelTwo;
						
			if(costPerUnitOne === costPerUnitTwo){
				
				accountingTool.COSTS.variableCost.Result.Amount.push(costPerUnitOne);
				
				accountingTool.COSTS.variableCost.Result.CostTitle.push(costTitle);

				console.log(accountingTool.COSTS.variableCost);
				
			}else{
				var mixedVariableCostPerUnit = (costOne - costTwo)/(activityLevelOne - activityLevelTwo);
				
				var mixedFixedCost = (costOne - (mixedVariableCostPerUnit * activityLevelOne));
				
				accountingTool.COSTS.mixedCost.Result.mixedFixedCost.push(mixedFixedCost);
				
				accountingTool.COSTS.mixedCost.Result.mixedVariableCost.push(mixedVariableCostPerUnit);
				
				accountingTool.COSTS.mixedCost.Result.CostTitle.push(costTitle);
				
				console.log(accountingTool.COSTS.mixedCost);
				
				console.log(accountingTool.COSTS.mixedCost.Result.CostTitle.length);
				
				
			
			}
			
		}
		
	},
	
	},
	
	CASHFLOW : "UnderConstruction:)"

};