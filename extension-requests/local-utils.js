const Status = {
  APPROVED: 'APPROVED',
  PENDING: 'PENDING',
  DENIED: 'DENIED',
};

const Order = {
  DESCENDING: 'desc',
  ASCENDING: 'asc',
};
async function getSelfUser() {
  try {
    const res = await fetch(`${API_BASE_URL}/users/self`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const self_user = await res.json();
    if (res.status === 200) {
      return self_user;
    }
  } catch (err) {}
}
async function getExtensionRequests(query = {}, nextLink) {
  let finalUrl =
    API_BASE_URL + (nextLink || generateExtensionRequestParams(query));

  const res = await fetch(finalUrl, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}
const generateExtensionRequestParams = (nextPageParams) => {
  const queryStringList = [];
  const searchQueries = ['assignee', 'taskId', 'status'];
  const urlSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(nextPageParams)) {
    if (!value) continue;

    if (searchQueries.includes(key)) {
      let queryString;
      if (Array.isArray(value)) {
        queryString = key + ':' + value.join('+');
      } else {
        queryString = key + ':' + value;
      }
      queryStringList.push(queryString);
    } else {
      urlSearchParams.append(key, value);
    }
  }
  if (queryStringList.length > 0)
    urlSearchParams.append('q', queryStringList.join(','));

  const uri = `/extension-requests?${urlSearchParams.toString()}`;
  return uri;
};
async function updateExtensionRequest({ id, body, isDev = false }) {
  const url = `${API_BASE_URL}/extension-requests/${id}${
    isDev ? `?dev=true` : ''
  }`;
  const res = await fetch(url, {
    credentials: 'include',
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (res.status < 200 || res.status > 300) {
    throw new Error('Update failed.');
  }
}

async function updateExtensionRequestStatus({ id, body, isDev = false }) {
  const url = `${API_BASE_URL}/extension-requests/${id}/status${
    isDev ? `?dev=true` : ''
  }`;
  const res = await fetch(url, {
    credentials: 'include',
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (res.status < 200 || res.status > 300) {
    throw new Error('Update failed.');
  }

  return await res.json();
}

async function getTaskDetails(taskId) {
  if (!taskId) return;
  const url = `${API_BASE_URL}/tasks/${taskId}/details`;
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return await res.json();
}

async function getUserDetails(username) {
  if (!username) return;
  const url = `${API_BASE_URL}/users?search=${username}&size=1`;
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const user = await res.json();

  return user?.users[0];
}

async function getInDiscordUserList() {
  try {
    const res = await fetch(`${API_BASE_URL}/users/search?role=in_discord`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function getAllUsersStatus() {
  try {
    const res = await fetch(`${API_BASE_URL}/users/status`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

function secondsToMilliSeconds(seconds) {
  return seconds * 1000;
}

function getTimeFromTimestamp(timestamp) {
  return new Date(timestamp * 1000).toLocaleString();
}

function createTable(headings, data, className = '') {
  const table = createElement({
    type: 'table',
    attributes: {
      class: className,
    },
  });
  const tableBody = createElement({ type: 'tbody' });
  headings.forEach(({ title, key, time, bold }) => {
    let row = createElement({ type: 'tr' });
    let rowHeading = createElement({ type: 'th', innerText: title });

    let contentText = '';
    if (time) contentText = getTimeFromTimestamp(data[key]);
    else contentText = key ? data[key] : data[title.toLowerCase()];

    let tableData = createElement({
      type: 'td',
      innerText: contentText,
      attributes: {
        class: bold ? 'bold' : '',
      },
    });
    row.appendChild(rowHeading);
    row.appendChild(tableData);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  return table;
}

function formDataToObject(formData) {
  if (!formData) return;
  const result = {};
  for (const [key, value] of formData.entries()) {
    result[key] = value;
  }
  return result;
}

const addSpinner = (container) => {
  const spinner = createElement({
    type: 'div',
    attributes: { class: 'spinner' },
  });

  container.append(spinner);

  function removeSpinner() {
    spinner.remove();
  }

  return removeSpinner;
};

/**
  Generates a formatted date-time string from milliseconds.*
  @param {number} milliseconds - The number of milliseconds since January 1, 1970 00:00:00 UTC.
  @returns {string} The formatted date-time string in the format 'YYYY-MM-DDTHH:mm'.
  
*/
function dateTimeString(milliseconds) {
  const date = new Date(milliseconds);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    '0',
  )}-${String(date.getDate()).padStart(2, '0')}T${String(
    date.getHours(),
  ).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}

const fullDateString = (timestamp) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date(timestamp);
  return `${daysOfWeek[date.getDay()]}, ${date.toLocaleString()}`;
};

function addEmptyPageMessage(container) {
  const emptyPageMessage = createElement({
    type: 'p',
    attributes: { class: 'page-message' },
    innerText: 'No extension requests to show!',
  });
  container.appendChild(emptyPageMessage);
}

function addErrorElement(container) {
  const errorHeading = createElement({
    type: 'h2',
    innerText: ERROR_MESSAGE_RELOAD,
  });
  container.appendChild(errorHeading);
}

async function getExtensionRequestLogs({ extensionRequestId, isDev = false }) {
  const url = `${API_BASE_URL}/logs/extensionRequests/?meta.extensionRequestId=${extensionRequestId}${
    isDev ? `&dev=true` : ''
  }`;
  const res = await fetch(url, {
    credentials: 'include',
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (res.status < 200 || res.status > 300) {
    throw new Error('Update failed.');
  }

  return await res.json();
}
