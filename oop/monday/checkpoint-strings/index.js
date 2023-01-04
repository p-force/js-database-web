function countVowels(str) {
return str.match(/[АаУуОоыЭэЯяЮюЁёИиЕе]/g).length;
}

function splitWords(str) {
return (str.replace(/[^a-zA-Z0-9А-Яа-я\s]/gm, '').replace(/[\n]/gm, '').trim().split(' ').filter((el) => el !== ''));
}

function removePunctuation(str) {
  return (str.replace(/[^a-zA-Z0-9А-Яа-я]/gm, ''));
}

module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
