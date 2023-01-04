class View {
  render(game) {
    // const yourTeamName = 'Elbrus';

    console.clear();
    console.log(game.track.map((el) => { el.push('\n'); return (el.join('')); }).join(''));
    // console.log(track);
    console.log('=============================');
    console.log(`Your coin is: ${game.hero.coin}`);
    console.log(`Your score is: ${game.hero.score}`);
    // console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
