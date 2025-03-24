function saveToSearchHistory(search:string) {
    let searchArr = getHistoryFromLocalStorage();
    let searchIndex = searchArr.indexOf(search);
  
    if (!searchArr.includes(search)) {
      searchArr.push(search);
    } else {
      searchArr.splice(searchIndex, 1);
      searchArr.push(search);
    }
  
    localStorage.setItem("SearchHistory", JSON.stringify(searchArr));
  
    let localStorageData = getHistoryFromLocalStorage();
    if (localStorageData.length > 4) {
      localStorageData.shift();
      localStorage.setItem("SearchHistory", JSON.stringify(localStorageData));
    }
  }
  
  function saveToFavorites(city:string) {
    if(typeof window !== "undefined"){
    console.log("saved");
    let cityArr = getFavoritesFromLocalStorage();
  
    if (!cityArr.includes(city)) {
      cityArr.push(city);
    }
  
    localStorage.setItem("Favorites", JSON.stringify(cityArr));
  }
  }
  
  function getHistoryFromLocalStorage() {
    if(typeof window !== "undefined"){
    let localStorageData = localStorage.getItem("SearchHistory");
    if (localStorageData == null) {
      return [];
    }
  
    return JSON.parse(localStorageData);
    }
  }
  
  function getFavoritesFromLocalStorage() {
    if(typeof window !== "undefined"){
    let localStorageData = localStorage.getItem("Favorites");
    if (localStorageData == null) {
      return [''];
    }
  
    return JSON.parse(localStorageData);
    }
  }
  
  function removeFavorites(favorite:string) {
    let localStorageData = getFavoritesFromLocalStorage();
  
    let favoritesIndex = localStorageData.indexOf(favorite);
  
    localStorageData.splice(favoritesIndex, 1);
  
    localStorage.setItem("Favorites", JSON.stringify(localStorageData));
  }
  
  
  
  export {
    saveToSearchHistory,
    saveToFavorites,
    getHistoryFromLocalStorage,
    getFavoritesFromLocalStorage,
    removeFavorites,
  };
  