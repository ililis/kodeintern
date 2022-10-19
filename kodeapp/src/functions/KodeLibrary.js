export default class KodeLibrary {

  static convertDate (date) {
    if (typeof date == "string") {
      date = new Date(date);
      // return parseInt(date.slice(5,7)) * 100 + parseInt(date.slice(8,10));
    }
    if (typeof date == "object") {
      return (date.getMonth() + 1) * 100 + date.getDate();
    }
    return 0;
  }

  static sortUsers (users, sortType) {
    
    if(sortType === "byname") {
      const sortedResponse = users.sort((a, b) => {
        let fullaNameA = a.firstName + a.lastName;
        let fullaNameB = b.firstName + b.lastName;
  
        if (fullaNameA > fullaNameB) {
          return 1;
        }
        if (fullaNameA < fullaNameB) {
          return -1;
        }
        return 0;
      });
      return sortedResponse;
    }

    if(sortType === "byborn") {

      const convD = this.convertDate;
      const sortedResponse = users.sort((a, b) => {
        if (convD(a.birthday) > convD(b.birthday)) {
          return 1;
        }
        if (convD(a.birthday) < convD(b.birthday)) {
          return -1;
        }
        return 0;
      });
      return sortedResponse;
    }
  }
}