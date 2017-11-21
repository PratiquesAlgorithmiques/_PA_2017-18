
class prediction {
  current(i){

    this.current_0 = random(sante);
    this.current_1 = random(sante);
    this.current_2 = random(travail);
    this.current_3 = random(travail);
    this.current_4 = random(amour);
    this.current_5 = random(amour);
    this.current_6 = random(poesie);
    this.current_7 = random(poesie);
    this.current_8 = random(phrasesante);
    this.current_9 = random(phrasetravail);
    this.current_10 = random(phraseamour);
    this.current_11 = random(phrasepoesie);
    this.current_12 = i;

    
  }


  display() {
    background(img);
    textFont('Contrail One');
    
    textSize(20);
    fill(225, 197, 39);

    text(this.current_12 + " \n\ " +  " \n\ " + " SANTE " + " \n\ " + " \n\ " + this.current_8 + " \n\ " +  this.current_0 + " \n\ " + this.current_1 + " \n\ " + " \n\ " + " TRAVAIL " + " \n\ " + " \n\ " + this.current_9 + " \n\ " + this.current_2 + " \n\ " + this.current_3 + " \n\ " + " \n\ " + " AMOUR " + " \n\ " + " \n\ " + this.current_10 + " \n\ " + this.current_4 + " \n\ " + this.current_5 + " \n\ " + " \n\ " + " POESIE " + " \n\ " + " \n\ " + this.current_11 + " \n\ " + this.current_6 + " \n\ " + this.current_7 , width/3, height/2);
  
  
  }
}
