import { TwoPaneList } from "./TwoPaneList.jsx"

import "bulma/css/bulma.min.css"

function App() {
  return (
    <section className="section">
      <div className="box">
        <h1 className="title">Two-Pane List with Detail</h1>
        <p>Open <code>TwoPaneList.jsx</code> and implement your component named <code>TwoPaneList</code>.</p>
      </div>

      <h3 className="title is-4">Task</h3>
      <div className="content">
        <p>Create a React component (which may have sub-components) which implements a two-pane layout:</p>
        <ul>
          <li>The input to this component is a <code>data</code> property which contains an array of objects with the shape:</li>
          <code>
            &#123;
            <br/>
            &nbsp;&nbsp;title: string
            <br/>
            &nbsp;&nbsp;content: string[]
            <br/>
            &#125;
          </code>
          <li>The left pane contains a list of all the <code>title</code>s.</li>
          <li>When a title is clicked on, it displays the content in the right-hand pane, with each string in the <code>content</code> as a separate paragraph.</li>
          <li>Before anything is clicked the right-hand pane should have an empty state which tells people to click on a title.</li>
        </ul>
        <p>Use <code>bulma</code> classes for styling - the library is included in the bundle already.</p>
      </div>

      <h3 className="title is-4">Test</h3>
      <TwoPaneList data={[
        {
          title: "The Second Stage Turbine Blade",
          content: [
            "Release Year: 2002",
            "The Second Stage Turbine Blade is the debut studio album released by rock band Coheed and Cambria. It was originally released on March 5, 2002 through Equal Vision Records. It is their first album and part one of a tetralogy, telling the story of The Amory Wars. It was re-released on September 20, 2005, and included three previously unreleased bonus tracks."
          ],
        },
        {
          title: "In Keeping Secrets of Silent Earth: 3",
          content: [
            "Release Year: 2003",
            "In Keeping Secrets of Silent Earth: 3 is the second studio album by rock quartet Coheed and Cambria. It was released on October 7, 2003, through Equal Vision Records. It was recorded at Applehead Recording, Woodstock, New York and produced by Michael Birnbaum and Chris Bittner.",
          ],
        },
        {
          title: "Good Apollo, I'm Burning Star IV, Volume One: From Fear Through the Eyes of Madness",
          content: [
            "Release Year: 2005",
            "Good Apollo, I'm Burning Star IV, Volume One: From Fear Through the Eyes of Madness is the third studio album by progressive rock quartet Coheed and Cambria. It was released on September 20, 2005, through Equal Vision Records and Columbia Records, and is the first release on a major label. It is the third installment of a projected tetralogy, as well as the final studio album to feature drummer Josh Eppard before his original departure. He was replaced by Chris Pennie who was with the band for their next two albums (although he did not record on No World for Tomorrow due to contractual obligations) before Eppard returned to the band in late 2011. On their previous album, In Keeping Secrets of Silent Earth: 3, the phrase \"My dearest Apollo, I'll be burning Star IV\" is written after the lyrics for the song \"The Light & the Glass\".",
            "The album begins to resolve the issues of Claudio Kilgannon's quest to protect the Keywork, and sheds more light on the demise of Coheed and his wife Cambria. Also, it expands on the issues of the Monstar virus and Jesse's involvement in the saga. A graphic novel based upon the entire story of the album was released on the same day. This album, unlike the others, tells the story from the perspective of the author, known as The Writer, and the ways in which his life and personal demons affect his telling of the Amory Wars narrative.",
            "The official site once hosted the third track and first single from the album, entitled \"Welcome Home\". This song is featured in the music video game Rock Band, and the trailer for the CGI animated movie 9. The band's Myspace and PureVolume had the second single from the album, entitled \"The Suffering\". The third single was \"Ten Speed (of God's Blood & Burial)\", released only as a video and never to radio."
          ],
        },
        {
          title: "Good Apollo, I'm Burning Star IV, Volume Two: No World for Tomorrow",
          content: [
            "Release Year: 2007",
            "Good Apollo, I'm Burning Star IV, Volume Two: No World for Tomorrow (often shortened to No World for Tomorrow), is the fourth studio album by American progressive rock band Coheed and Cambria, released on October 23, 2007. The album is a direct sequel to their previous album, Good Apollo, I'm Burning Star IV, Volume One: From Fear Through the Eyes of Madness. The album comprises part four of band's Amory Wars narrative. It is the only album to feature Taylor Hawkins on drums, following the departure of Josh Eppard.",
            "The album is often marketed by the shortened title No World for Tomorrow. Neither the disc itself nor its outer packaging suggest the Good Apollo title, though it is found printed on the cover of the accompanying lyrics booklet, as well as the rim of the fourth side of the vinyl release. Frontman Claudio Sanchez has stated that the full name of the album is in fact Good Apollo, I'm Burning Star IV, Volume Two: No World for Tomorrow.",
            "The album debuted on the Billboard 200 album chart at No. 6, selling about 62,000 copies in its first week. It sold over 100,000 copies in its first month. As of January 2008, the record has sold over 350,000 copies, with 153,979 being sold in the US.",
          ],
        },
        {
          title: "Year of the Black Rainbow",
          content: [
            "Release Year: 2010",
            "Year of the Black Rainbow is the fifth studio album by rock band Coheed and Cambria, released on April 13, 2010 through Columbia. The album is a prequel to the band's previous four concept albums, which comprise The Amory Wars narrative. Year of the Black Rainbow marks drummer Chris Pennie's only studio appearance. It is the last album to feature Michael Todd on bass.",
            "The band began recording the album in 2009. Prior to the release of the album, Coheed released two singles, \"The Broken\" and \"Here We Are Juggernaut\". The album received mainly positive reviews and peaked at number 5 on the Billboard 200 and number 35 on the UK Albums Chart. The deluxe version of the album was accompanied by a novel written by the band's vocalist/guitarist Claudio Sanchez and writer Peter David.",
          ],
        },
        {
          title: "The Afterman: Ascension",
          content: [
            "Release Year: 2012",
            "The Afterman: Ascension is the sixth studio album by American progressive rock band Coheed and Cambria. It is the first part of a double album, the second part of which is The Afterman: Descension. The band took seven months to record the albums between 2011 and 2012, released a live acoustic version of \"Key Entity Extraction V: Sentry the Defiant\" (which appears on The Afterman: Descension) in February 2012, and announced a release date of October 9 later that year. The first single was \"Key Entity Extraction I: Domino the Destitute\", released in August 2012. It is the first Coheed and Cambria album since 2005's Good Apollo, I'm Burning Star IV, Volume One: From Fear Through the Eyes of Madness to feature Josh Eppard on drums, and the first to feature Zach Cooper on bass. The album received mainly positive reviews.",
            "The deluxe version of the album was released with a coffee-table book written by band member Claudio Sanchez and edited by Evil Ink Comics' Chondra Echert and Blaze James, intended to give a song-by-song experience of the concept album. The album follows the Amory Wars storyline, and concentrates on the character Sirius Amory.",
          ],
        },
        {
          title: "The Afterman: Descension",
          content: [
            "Release Year: 2013",
            "The Afterman: Descension is the seventh studio album by progressive rock band Coheed and Cambria. It is the second part of a double album, the first part of which is The Afterman: Ascension. The band took seven months to record the albums between 2011 and 2012, and announced a February 5, 2013 release date.",
            "The deluxe version of the album was released with a coffee-table book co-written by band member Claudio Sanchez and writer Peter David, giving a song-by-song experience of the concept album. The album follows the Amory Wars storyline, and concentrates on the character Sirius Amory.",
          ],
        },
        {
          title: "The Color Before the Sun",
          content: [
            "Release Year: 2015",
            "The Color Before the Sun is the eighth studio album by progressive rock band Coheed and Cambria. Following the conceptual double album, The Afterman: Ascension and Descension, released in 2012 and 2013 respectively, The Color Before the Sun is the first non-conceptual album the band has released, making it the only Coheed and Cambria album to not be a part of The Amory Wars storyline. The band released a live acoustic version of \"Atlas\" in August 2014, and announced a release date of October 9 in July of the following year, before announcing a push back to October 16, 2015. The first single was \"You Got Spirit, Kid\", released in July 2015, with a music video for the song released in August. A second music video, for the song \"Island\", was released in October.",
          ],
        },
        {
          title: "Vaxis - Act I: The Unheavenly Creatures",
          content: [
            "Release Year: 2018",
            "Vaxis – Act I: The Unheavenly Creatures (often shortened to The Unheavenly Creatures) is the ninth studio album by progressive rock band Coheed and Cambria. It was released on October 5, 2018, continuing the band's Amory Wars concept.",
          ],
        },
      ]} />
    </section>
  )
}

export default App
