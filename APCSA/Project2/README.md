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
	
# FindParking (the driver class)

You will write a class called FindParking. It is the driver class, meaning, it will contain the main method.

In this class you will

- [ ] Create a random starting coordinate (your car’s position) 
- [ ] Create four ParkingSpot objects with random location coordinates. 
- [ ] After your car’s position is determined and the spots are created, you will calculate how much it would cost to park in each 
spot for a given number of time.
- [ ] You will use conditional statements to determine which spot is closest to you.

Your FindParking code should not duplicate any data or functionality that belongs
to the ParkingSpot objects. Make sure that you are accessing data using the
ParkingSpot methods.

Do NOT use a loop or arrays to generate your ParkingSpots. We will discuss how
to do this later, but please don’t over complicate things now. If you want to do
something extra, see the extra credit section below.

