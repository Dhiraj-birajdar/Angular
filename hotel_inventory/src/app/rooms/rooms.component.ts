import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  constructor() { }
  rooms!: Room;
  ngOnInit(): void {
    this.rooms = {
      totalRooms: 10,
      availableRooms: 55,
      bookedRooms: 2
    }
  }
  hotelName = 'Hotel California';
  numberOfRooms = 10;
  hiddenRooms = false;

  toggleRooms() {
    this.hiddenRooms = !this.hiddenRooms;
    this.title = 'Rooms List';
  }
  title: string = 'Room List';
  selectedRoom!: RoomList;

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 104,
      roomType: 'Deluxe',
      amenities: 'TV, AC, WiFi',
      price: 400,
      photos: 'https://via.placeholder.com/150',
      checkInTime: new Date('2019-01-01T10:00:00'),
      checkOutTime: new Date('2019-01-01T12:00:00'),
      rating: 2.4
    }
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }

  roomList: RoomList[] = [{
    roomNumber: 101,
    roomType: 'Single',
    amenities: 'TV, AC, WiFi',
    price: 100,
    photos: 'https://via.placeholder.com/150',
    checkInTime: new Date('2019-01-01T10:00:00'),
    checkOutTime: new Date('2019-01-01T12:00:00'),
    rating: 2.4
  }, {
    roomNumber: 102,
    roomType: 'Double',
    amenities: 'TV, AC, WiFi',
    price: 200,
    photos: 'https://via.placeholder.com/150',
    checkInTime: new Date('2019-01-01T10:00:00'),
    checkOutTime: new Date('2019-01-01T12:00:00'),
    rating: 2.4,
  }, {
    roomNumber: 103,
    roomType: 'Suite',
    amenities: 'TV, AC, WiFi',
    price: 300,
    photos: 'https://via.placeholder.com/150',
    checkInTime: new Date('2019-01-01T10:00:00'),
    checkOutTime: new Date('2019-01-01T12:00:00'),
    rating: 2.4
  }, {
    roomNumber: 104,
    roomType: 'Suite',
    amenities: 'TV, AC, WiFi',
    price: 300,
    photos: 'https://via.placeholder.com/150',
    checkInTime: new Date('2019-01-01T10:00:00'),
    checkOutTime: new Date('2019-01-01T12:00:00'),
    rating: 2.4454
  }, {
    roomNumber: 105,
    roomType: 'Suite',
    amenities: 'TV, AC, WiFi',
    price: 300,
    photos: 'https://via.placeholder.com/150',
    checkInTime: new Date('2019-01-01T10:00:00'),
    checkOutTime: new Date('2019-01-01T12:00:00'),
    rating: 2.4564
  }]
}
