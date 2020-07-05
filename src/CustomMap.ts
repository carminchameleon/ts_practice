export class CustomMap {
  private googleMap: google.maps.Map;
  // private or public : public일 경우에는 다른 사람들이 접근해서 수정할 수 있지만
  // private : 우리가 제공한 것 이외에 다른 것들은 수정 할 수 없음

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
/*
이전에는 constructor(){
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    ... 
  }
이런 식으로 되어 있고, 이걸 쓰려고 할 때 new CustomMap() 으로 했었음
이걸 재 사용성을 늘리기 위해서 divId라는 parameter 지정, 
사용할 때에는 new CustomMap('map')으로 쓰려고 하는 아이디 argument 넘겨줌
*/
