var m;
var c;

function setup() {
	c = createCanvas(windowWidth, 200);
	c.position(0, windowHeight-200);
	background(255, 0,0);


	m = createDiv(""); 
	m.size(600, 200);
	m.style("overflow-y", "auto");
	m.position(200, 50);

	m.html("According to sources, MEPs were told by the chief Brexit negotiator, Michel Barnier, that Theresa May had conceded after days of intense talks that the province would be treated as a special caseA draft of the text of a 15-page joint statement between the European commission and the British government is said to include a commitment in paragraph 48 that “in the absence of agreed solutions the UK will ensure that there continues to be continued regulatory alignment” with the internal market and customs union.Ireland’s deputy prime minister, Simon Coveney, told RTE News that Ireland had been reassured that there would be no re-emergence of a hard border. “Certainly the indications we have is that we are in a much better place than we have been in Brexit negotiations to date,” Coveney said. “We have now a language that gives us the safeguards we need.”It is understood Ireland sees the phrase “regulatory alignment” as providing the highest degree of comfort to both sides, allowing talks to move to the next phase while at the same time giving room for manoeuvre for negotiations in the second phase.The UK still hopes that an ambitious and unprecedented trade deal will be struck with the EU in the future that makes the agreement struck on Monday academic. However, the formulation that appears to have been struck by London and Dublin would in effect keep Northern Ireland in keys aspects of the single market and customs union in event of a less generous trade accord being settled in the future.Arlene Foster, the leader of Northern Ireland’s Democratic Unionists, reiterated her party’s stance that the province must leave the EU on the same terms as the rest of the the UK. According to sources, MEPs were told by the chief Brexit negotiator, Michel Barnier, that Theresa May had conceded after days of intense talks that the province would be treated as a special caseA draft of the text of a 15-page joint statement between the European commission and the British government is said to include a commitment in paragraph 48 that “in the absence of agreed solutions the UK will ensure that there continues to be continued regulatory alignment” with the internal market and customs union.Ireland’s deputy prime minister, Simon Coveney, told RTE News that Ireland had been reassured that there would be no re-emergence of a hard border. “Certainly the indications we have is that we are in a much better place than we have been in Brexit negotiations to date,” Coveney said. “We have now a language that gives us the safeguards we need.”It is understood Ireland sees the phrase “regulatory alignment” as providing the highest degree of comfort to both sides, allowing talks to move to the next phase while at the same time giving room for manoeuvre for negotiations in the second phase.The UK still hopes that an ambitious and unprecedented trade deal will be struck with the EU in the future that makes the agreement struck on Monday academic. However, the formulation that appears to have been struck by London and Dublin would in effect keep Northern Ireland in keys aspects of the single market and customs union in event of a less generous trade accord being settled in the future.Arlene Foster, the leader of Northern Ireland’s Democratic Unionists, reiterated her party’s stance that the province must leave the EU on the same terms as the rest of the the UK.");

}

function draw() {
	fill(0);
	rect(20, 20, 100, 100);
}
