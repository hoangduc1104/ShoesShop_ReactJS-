export function getHistory() {
  if (
    typeof localStorage.getItem('SearchHistory') !== 'undefined' &&
    localStorage.getItem('SearchHistory') !== null
  ) {
    return JSON.parse(localStorage.getItem('SearchHistory'));
  }
  localStorage.setItem('SearchHistory', JSON.stringify([]));
  return JSON.parse(localStorage.getItem('SearchHistory'));
}

export function setHistory(data) {
  //   localStorage.setItem('SearchHistory', JSON.stringify({ history: [] }));
  localStorage.setItem('SearchHistory', JSON.stringify(data));
  return data;
}
