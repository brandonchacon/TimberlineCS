# Project Overview
In this project, you will develop an application that randomly generates four parking spots
and determines which parking spot is the closest to your current location.

# Objectives

- Write a class with a main method (FindParking).
- Use an existing, custom class (ParkingSpot).
- Use classes from the Java standard library.
- Work with numeric data.
- Work with standard input and output.

# Specification

- Existing class that you will use: ParkingSpot.java
- Class that you will create: FindParking.java

# ParkingSpot (provided class)

You are given a class named ParkingSpot that keeps track of the details about a parking
spot. Each parking spot instance will keep track of the following data.

* Name of the spot.
	* The spot name must be specified when the spot is created (for example, "5th and main")
* Coordinates in a 2-dimensional city grid.
	* The (x, y) coordinates must be specified when the spot is created.
* The charge per 10 minutes interval.
	* The default charge is 25 cents per 10 minute interval. 
	* As with all parking meters, payment must be in whole intervals.
* The ParkingSpot class has the following methods available for you to use:
	* public ParkingSpot(String name, int locationX, int locationY) – (The Constructor)
	* public double getCharge()
	* public void setChart(double charge)
	* public String getName()
	* public int getLocationX()
	* public int getLocationY()
	* public String toString()
	
# Your Tasks

You will write a class called FindParking. It is the driver class, meaning, it will contain the main method.

In this class you will

- [ ] Create a Scanner using the standard input as follows, 

```
Scanner in = new Scanner(System.in);
```

- [ ] Your scanner should prompt the user for a String value for the amount of parking time needed in the following format, hh:mm
- [ ] Your scanner should prompt the user for a String value for the name of the cars location (for example, "Timberline HS")
- [ ] Once you have collected the necessary information from the user,  your program should generate random x and y starting coordinates for the car.  These values will range from 0 to 100 (100 not inclusive). 
- [ ] Create three ParkingSpot objects with random x and y location coordinates ranging from 0 to 100 (100 not inclusive).  You will also need to provide names for the parking spots (for example, "1st and main").  See the constructor
in the ParkingSpot class for expected parameters. 
- [ ] Change the default parking cost for two of the parking spots using the setCostPerInterval() method in the ParkingSpot class.  
	* For example if you created a parking spot called "spot" one, you can set the interval using spot1.setCostPerInterval(40);
- [ ] Calculate how much it costs to park at each of the spots you created.  
	* You can get the cost to park per 10 minutes using the getCostPerInterval() method (for example, spot1.getCostPerInterval());  
	* You will need to convert the time in hh:mm to total time in minutes 
	* You will then need to figure out the total cost to park. (parking meters do not round down!)
	* The total cost will need to be converted to a String so it prints as expected (for example, $1.50);
	* Once you figure out the total cost you need to set the total cost (for example, spot1.setTotalCost("$1.50"))
		* Note: there are other ways to do the above using the NumberFormat class, but just use Strings here. 
- [ ] Calculate the distance from the driver for each spot using Manhattan geometry: 
	* for two points (x1, y1) and (x2, y2) the distance is |x1 − x2| + |y1 − y2|
	* Once you figure out the total distance you need to set the total distance (for example, spot1.setDistance(65));
- [ ] Use if statements to figure out which spot is closest, which is second closest, which is third closest. 
	* You can access the distance for each spot using the getDistance() method (for examples, spot1.getDistance());
- [ ] You will print out the locations in order from closest to farthest in a table like the one shown below, 

```

***************************************************************************************************************************
My cars location: Timberline High School     x-coordinate: 88           y-coordinate:77
***************************************************************************************************************************
Parking Spot        unit cost       total cost       x-location          y-location           distance          available
***************************************************************************************************************************
1st and main            25             1.50             65                   45                  55               true
downtown library        30             3.00             77                   56                  61               true
Capital building        10              .75             35                   85                  58               true
```






