export interface RentalListModel{
    id:number
    rentalDate:Date
    returnDate:Date
    rentedKilometer:number
    returnedKilometer:number
    pickUpCityId:number
	pickUpCityName:string
	returnCityId:number
	returnCityName:string
    customerId:number
    carId:number
    brandName:String
    dailyPrice:String
    promotionId:number
    carImageUrl:string
}