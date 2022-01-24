export interface CreateRentalModel{
    rentalDate:Date
    returnDate:Date
    rentedKilometer:number
    returnedKilometer:number
    pickUpCityId:number
	returnCityId:number
    customerId:number
    carId:number
    promotionId:number
}