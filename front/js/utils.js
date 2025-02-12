'use strict';

const modalTitle = $('#modal .modal-title');
const modalBody = $('#modal .modal-body');
const modal = $('#modal');


function showModal(header, data) {
  modalTitle.empty().append(header);
  modalBody.empty().append(data);
  // modal.on('hidden.bs.modal',  ()=>{
  //  window.location.href = '#';
  // /});
  modal.modal();
}

function addAutoBadge(error) {
  if (error.indexOf('AUTO ') === 0) {
    return `${error.replace('AUTO ', '')} <span class="label label-default">auto</span>`;
  }
  return error;
}

function addErrorBadges(row) {

  const displayName = row.msgName;
  if (row.errors && row.errors.length) {
    return `${displayName} <span class="label label-danger">${row.errors.join(', ')}</span>`;
  }
  return displayName;
}

function formatMessageName(row) {
  return addAutoBadge(addErrorBadges(row));
}

function showDiff(sec) {
  let unit = 'sec';
  let data = sec;
  if (data > 60) {
    data /= 60;
    unit = 'min';
    if (data > 60) {
      data /= 60;
      unit = 'hour';
      if (data > 24) {
        data /= 24;
        unit = 'day';
        if (data > 30) {
          data /= 30;
          unit = 'month';
        }
      }
    }
  }
  return `${parseInt(data, 10)} ${unit}`.replace(' ', '&nbsp;');
}

export {
  showDiff,
  showModal,
  addAutoBadge,
  addErrorBadges,
  formatMessageName,
};
