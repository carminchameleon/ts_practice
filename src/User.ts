import faker from 'faker';

// type definition file 을 매뉴얼로 해야한다. -> @type/{library name}
// string 을 Number로 바꿀 때 사용한 메소드 : parseFloat()
// typescript export 컨벤션 : export defualt를 사용하지 않는 것 - 어떤 것은 {} 안에 넣고 어떤 것은 안넣기 때문에 헷갈릴 수 있다.
// 이 사람은 항상 { } 에 넣는다.

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
