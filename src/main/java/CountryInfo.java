public class CountryInfo {
	private String cName;
	private String population;
	private String continent;
	private String capital;
	private String language;
	private String currency;
	private String poi1;
	private String poi2;
	private String poi3;
	private String poi4;
  public CountryInfo(){};
	public CountryInfo(String cname,String pop,String cont,String cap,String lang,String cur,String p1,String p2,String p3,String p4)
	{
		this.cName = cname;
		this.population = pop;
		this.continent = cont;
		this.capital = cap;
		this.language = lang;
		this.currency = cur;
		this.poi1 = p1;
		this.poi2 = p2;
		this.poi3 = p3;
		this.poi4 = p4;

	}

	public String getcName() {
		return cName;
	}
	public void setcName(String cName) {
		this.cName = cName;
	}
	public String getPopulation() {
		return population;
	}
	public void setPopulation(String population) {
		this.population = population;
	}
	public String getContinent() {
		return continent;
	}
	public void setContinent(String continent) {
		this.continent = continent;
	}
	public String getCapital() {
		return capital;
	}
	public void setCapital(String capital) {
		this.capital = capital;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getPoi1() {
		return poi1;
	}
	public void setPoi1(String poi1) {
		this.poi1 = poi1;
	}
	public String getPoi2() {
		return poi2;
	}
	public void setPoi2(String poi2) {
		this.poi2 = poi2;
	}
	public String getPoi3() {
		return poi3;
	}
	public void setPoi3(String poi3) {
		this.poi3 = poi3;
	}
	public String getPoi4() {
		return poi4;
	}
	public void setPoi4(String poi4) {
		this.poi4 = poi4;
	}



}
