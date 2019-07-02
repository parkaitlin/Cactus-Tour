import React from 'react';
import styled from 'styled-components';

const PolicyBox = styled.div`
    min-height: 64vh;
    margin: 25px 60px;
    padding: 25px 60px;
    border-left: 2px solid #84dcac;
    border-right: 2px solid #84dcac;
    
    span{
        font-weight: 700;
    }

    div {
        margin: 15px;
    }
    p {
        text-align: justify;
    }
    ul {
        margin: 10px 18px;;
    }
    .pop-title {
        margin-left: 30px;
    }
    .pop {
        margin-bottom: 10px;
        margin-left: 30px;
    }
    ul.pop {
        margin: 10px 60px;
    }
`

const Policies = (props)=>{
    return(
        <>
            <PolicyBox>
                <h1>Our Policies</h1>
                <div>
                    <span>GENERAL: </span>
                    <p>USGA rules will govern all play. Local rules may apply to certain situations on the course. The one ball rule will be in effect for all events. Spikeless or soft-spike shoes only.</p>
                </div>
                <div>
                    <span>MEMBERSHIP: </span>
                    <p>Annual Membership and registration - $399* if paid with cash, check, or money order and $412 if paid by PayPal. The Cactus Tour reserves the right to refuse participant entry into any event as allowed by law. Participant(s) entries and eligibility are at the sole discretion of the Tour staff, committee and/or the tournament host facility.  Membership fee is non-refundable once paid and the season has started.</p>
                </div>
                <div>
                    <span>EVENT ENTRIES: </span>
                    <p>All Professional entry fees will be $560 for members, $660 for non-members and must be paid by cash, check, money order or online through PayPal.  If paying via PayPal, the entry fee will be $577 for members, $680 for non-members. Amateur entry fees will be $200 for members, $275 for non-members and must be paid by cash, check, money order or online through PayPal.  If paying via PayPal, the entry fee will be $206 for members, $285 for non-members. Amateur players should have a handicap of 6 or less to play on the tour.</p>
                </div>
                <div>
                    <span>PAYMENTS: </span>
                    <p>Event entry and membership may be paid via PayPal, money order, business check or cashiers check made out to THE CACTUS TOUR.  Please note that when paying via PayPal that players must note as to which event or events the payment is for.</p>
                </div>
                <div>
                    <span>REFUNDS: </span>
                    <p>Refunds for events will be dealt with on a case by case basis depending on the circumstances.  If necessary the Committee will review certain refund situations. There will be no refunds if a player withdraws during play, a tournament or does not show (DNS). The tour has to prepay for all the players course fees.  At a minimum the player will have to pay for the course fee for that event. All decisions will be final. 
                    </p>
                </div>
                <div>
                    <span>CANCELLATION POLICY: </span>
                    <p>If a player cancels after committing and/or registering: </p>
                    <ul>
                        <li>a $25 administration fee will be assessed if it is before the Friday prior to the event</li>
                        <li>a $75 administration fee will be assessed if it is on Saturday after tee times are posted</li> 
                        <li>a $100 + Round 1 greens fee will be assessed if it is on the Sunday prior to the event</li>
                    </ul>
                    <p>If the player no-shows or cancels the day of the event that player forfeits their entire entry fee.
                    A verbal commitment to compete in an event is the same as registering for the event noted.</p>
                </div>
                <div>
                    <span>PRIZE MONEY DISTRIBUTION: </span>
                    <p>The Cactus Tour will pay the top 50% (½) of the Pro field and ties after the completion of each event. Checks will be available on-site following play.</p>
                </div>
                <div>
                    <span>PLAYOFF AND TIES: </span>
                    <p>A sudden death playoff for first place only will follow completion of play on the hole chosen by the Tour Director and host professional. All other ties will remain as ties and the purse for those positions will be divided equally. </p>
                </div>
                <div>
                    <span>CONDUCT: </span>
                    <p>The Cactus Tour maintains a strict policy on any behavior unbecoming a professional golfer. This includes but is not limited to vulgar language, club throwing, damage to the golf course or course property. The player will be responsible for the cost of any damage. <br/>
                    <br/>1st offense: A warning.
                    <br/>2nd offense: 2 strokes and a $100 fine.
                    <br/>3rd offense: Immediate revocation of membership which will require a Committee review for reinstatement. </p>
                </div>
                <div>
                    <span>PLAYER ATTIRE: </span>
                    <p>Players shall present a neat appearance in both clothing and personal grooming. No denim or tank tops. Sleeveless tops must have a collar and tops with sleeves can be collarless. This pertains to practice rounds, tournament rounds and using the practice area. If a player is asked to change an article of clothing do not argue just do it.  Be advised that the dress code at private clubs may be substantially different then that of the Tour's.  We will make every effort to advise players of such well in advance. The Tour will respect the club's dress code. Soft spikes or spike-less shoes at all events.</p>
                </div>
                <div>
                    <span>SCORING AREA: </span>
                    <p>After completion of the round, the players are to bring their cards to the designated scoring area, sign them, and turn them in to the person in the scoring area. ONCE THE PLAYER HAS TURNED IN THEIR CARD AND LEFT THE BOUNDARY OF THE SCORING AREA, THE SCORECARD IS CONSIDERED OFFICIAL.</p>
                </div>
                <div>
                    <span>STARTING TIMES, OFFICIAL TIME AND LATE TO THE TEE: </span>
                    <p>Starting times will be posted in the pro shop, at the scoreboard and website. Official time will be on the starting tee clocks. There may be clocks on the range and the putting green but they are not official. An inaccurate time on any other clock, IS NOT AN EXCUSE FOR BEING LATE TO THE TEE. The responsibility of being ready to play at the appointed time lies solely with the individual player. Try to be at the tee 5 to 10 minutes early.  A player must be present and ready to play (present on the teeing ground with a club and ball) when the first player of the group is instructed to play. The order of play is not relevant. The Tour allows the player to be 5 minutes late with a 2 stroke penalty and after 5 minutes, the player will be disqualified (with no refund). Rule 6-3</p>
                </div>
                <div>
                    <span>PACE OF PLAY: </span>
                    <p>The player shall play without undue delay and in accordance with any pace of play guidelines which may be laid down by the Committee,” and thereafter prescribes penalties for slow play.  In order to prevent any such penalty we suggest that you review carefully the following guidelines. The Cactus Tour Committee consists of the Tour Director and the host course PGA professional.<br/><br/>
                        <span className="pop-title">Allotted Time: </span>
                        <p className="pop">When play is in groups of two, groups will be required to play at a 3 hour and 15 minute pace for the 18-hole round. When play is in groups of three, groups will be required to play at a 3 hour and 45 minute pace for the 18-hole round. When play is in groups of four, groups will be required to play at a 4 hour and 15 minute pace for 18 holes. </p>
                        <span className="pop-title">Definition of "Out of Position": </span>
                        <p className="pop">The first group to start will be considered out of position if, at any time during the round, the group is behind the prescribed schedule. Any following group will be considered out of position if it (a) is taking more than the allotted time to play and (b) reaches the tee of a par-3 hole and the preceding group has cleared the next tee; reaches the tee of a par-4 hole and the putting green is clear; or reaches the tee of a par-5 hole when the preceding group is on the putting green. Both (a) and (b) must apply for a group to be out of position.</p>
                        <span className="pop-title">Group Out of Position: </span>
                        <p className="pop">If a group is out of position, a Tour Rules Official will monitor them.  A group out of position will NOT be informed when they are being monitored and timed.  However, a player may ask a Rules Official if his group is being monitored and timed.</p>
                        <span className="pop-title">Timing: </span>
                        <p className="pop"> If a group is out of position, it may be monitored or timed for failure to comply with this pace of play guideline. When a group is out of position each player in the group is expected to play any stroke within 40 seconds after timing of the player’s stroke begins. Other than on the putting green, timing of a player’s stroke will begin when she has had reasonable opportunity to reach her ball, it is her turn to play and she can play without interference or distraction. Time spent determining yardage will count as part of the time taken for the next stroke. On the putting green, timing will begin after a player has been allowed a reasonable amount of time to lift, clean and replace her ball, repair her ball mark and other ball marks on her line of putt and remove loose impediments from her line of putt. Time spent looking at the line from beyond the hole and/or behind the ball will count as part of the time taken for the next stroke. <br/> A player is permitted 40 seconds to play a stroke. An extra 10 seconds (for a total of 50 seconds) will be allowed for: </p>
                        <ul className="pop">
                            <li>the first player to play a stroke on a par-3 hole</li>
                            <li>the first player to play a second stroke on a par-4 or par-5 hole</li>
                            <li>the first player to play a third stroke on a par-5 hole</li>
                            <li>the first player to play a stroke around the putting green</li>
                            <li>the first player to play a stroke on the putting green</li>
                        </ul >
                        <p className="pop">The Committee reserves the right at any time to time a group when the Committee deems it necessary. Players should also be aware that the Committee may assess a “bad time” to a player in a group which is out of position if the player makes no effort to help his group get back in position. An example of this would be a player who unduly delays play between shots. <br/>Any group with a player (s) who has a bad time will be notified if the group requires additional monitoring and timing during the round.</p>
                        <span className="pop-title">Rulings or Other Incidents: </span>
                        <p className="pop">If a ruling or some other legitimate delay occurs which causes the group in question to lose its position, that group is expected to regain its position within a reasonable time. </p>
                        <span className="pop-title">Appeals: </span>
                        <p className="pop"> Any appeal of a pace of play penalty must be referred to the Tour Director immediately upon completion of the player in question's round.  The Tour Director and host course PGA Professional's decision shall be final.</p>
                    </p>
                </div>
                <div>
                    <span>TRANSPORTATION: </span>
                    <p>Only players and caddies will be allowed to ride in carts.  Spectators must walk or rent carts from the pro shop if available.</p>
                </div>
                <div>
                    <span>SUSPENSION OF PLAY DUE TO DANGEROUS SITUATION: </span>
                    <p>Play is suspended for a dangerous situation upon decision of the Tour Director and the host professional. If the players are between the play of two holes or in the process of playing a hole (mark your ball position) they shall discontinue play immediately and shall not thereafter resume play until the Committee has ordered a resumption of play. Penalty for breach of rule is disqualification. All practice areas shall be closed during suspension for a dangerous situation until the Committee has declared them open for use.</p>
                </div>
                <div>
                    <span>SIGNALS FOR SUSPENDING AND RESUMING PLAY: </span>
                    <ul>
                        <li>Suspend play - Several short intermittent blasts from horn or siren.</li>
                        <li>Resume play - Two intermittent blasts from a horn or siren.</li>
                        <li>Suspension due to immediate danger (lightning, tornado etc.) - One continuous blast from a horn or siren.</li>
                    </ul>
                </div>
                <div>
                    <span>MOBILE TELEPHONES & ELECTRONIC DEVICES: </span>
                    <p>The use of any type of mobile telephone on the golf course during play is prohibited except to call in for a ruling. You may not use such things as Ipods, MP3 Players, cassette recorders, blackberries, gameboy or anything else that falls into this category. Failure to abide by this rule will result in disqualification and no refund. You get one warning! </p>
                </div>
                <div>
                    <span>MISCELLANEOUS: </span>
                    <p>The tournament policies and procedures of The Cactus Tour are subject to revision at any time without notice.</p>
                </div>
            </PolicyBox>
        </>
    )
}

export default Policies;