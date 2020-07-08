import React, { useRef, useEffect } from 'react'; 
import './UseOfApplication.scss';
import { useMediaQuery } from 'react-responsive';

function UseOfApplication() {

    const privacyPolicyRef = useRef(null),
        isSmall = useMediaQuery({query: '(max-width: 768px'});

    useEffect(() => {
        let endpoint = window.location.href;
        if (endpoint.substring(endpoint.length-14, endpoint.length) === 'privacy-policy') {
            let headerOffset = isSmall ? 60 : 138;
            window.scrollTo(0, privacyPolicyRef.current.offsetTop - headerOffset);
        }
    })

    return (
        <div className='terms'>
            <div className='terms-intro'>
                <strong className='terms-title'>Use of Application Agreement</strong><br/>
                This Use of Application Agreement ("Agreement") is a legal agreement between you and Tonbridge Health ("Tonbridge Health", "we," "us" or "our"), governing your use of Tonbridge Health’s software application including Meg, weight loss, activity and nutrition analysis programs and our related websites at www.tonbridgehealth.com, www.askmeg.ai and www.askmeg.us (collectively the "Application"). By using the Application, you agree to be bound by this Agreement.
                Both we and you acknowledge that this Agreement is between us and you, and that we are solely responsible for the content of the Application. 
                The privacy policy (“Privacy Policy”) covering your use of our Application is described below and incorporated by reference.
            </div>
            <ol className='terms-list'>
                <li className='terms-item'>
                    <strong>Introduction</strong><br/>
                    The Application’s knowledge-base, that’s the information Meg uses to provide you, her Client, with guidance, has been developed by a team comprising faculty at Chicago’s Northwestern Medicine, leading dietitians and exercise physiologists associated with leading professional sports teams. Our team bases their advice on proven weight loss approaches and programs that have strong evidence of demonstrated effectiveness. This advice is supported by health and activity recommendations developed by the U.S. Government’s Centers For Disease Control and Prevention (CDC) and the National Institutes of Health.  In sum, we avoid “fads” and focus on the proven. Our goal is to provide you with world class advice to help you learn new habits and change old ones. 
                    Meg will provide guidance to promote a healthy weight. However, Meg isn't a doctor and Tonbridge Heath, the organization developing Meg, isn’t a medical organization and we can't give you medical advice. We strongly urge you to consult with your primary health care provider (e.g., physician or nurse practitioner) before starting any plan that could result in weight loss, even if weight loss is not your goal.  
                    We encourage you to maintain your weight within the healthy weight guidelines endorsed by the World Health Organization, equivalent to a Body Mass Index (BMI) between 18.5 and 25.0.  You may opt to maintain your current weight while developing healthy habits. Users with a BMI below 18.5 are not permitted to set a weight loss goal as weight loss is not advised for people with BMI below the healthy range.
                    Weight loss can create physical changes that should be medically monitored. Studies have shown, for example, that weight loss can aggravate gall bladder illness. Medical monitoring is especially important for people with a known medical condition. Our approach encourages a healthier pattern of eating and the development of healthy lifestyle habits. However, it is not intended to treat any illness or disease. 
                    If you are being treated for a medical condition, taking prescription medication, or following a therapeutic diet to treat a disease, it's especially important to show the plan you develop with Meg to your health care provider. Any modifications made to the plan by your health care provider should be followed.
                    If you subscribe to a fee-based product, this Agreement supplements the relevant Subscription Agreement governing your subscription and all such terms and conditions shall continue to apply unless expressly stated below.  
                    We may, at our sole discretion, change, modify, add or remove provisions of this Agreement at any time. By using the Application after we post any changes to this Agreement, you agree to accept those changes, whether or not you have reviewed them. This Agreement will also govern any software upgrades provided by Tonbridge Health.
                </li>
                <li className='terms-item'>
                    <strong>License To Use</strong><br/>
                    The Application is provided to you under license.  Your use of the Application, and any dietary or other information or data used by or in connection with the Application (the "Data"), is subject to and limited by the license terms set forth below.
                    We grant you a limited, non-exclusive, non-transferable license to use the Application and Data subject to the terms and conditions set forth in this Agreement.  You may: (a) use the Application and Data for personal, non-commercial purposes only; and (b), view the Data solely in connection with the Application. 
                    You may not use, or permit others to use, the Application or Data except under the terms expressly listed above. Without limiting the previous sentence, you shall not, and shall not permit anyone else to: (a) modify, translate, reverse engineer, decompile, attempt to derive the source code of, disassemble, modify or create derivative works based upon the Software or Data; (b) copy the Application or Data or any updates or any part thereof; (c) rent, lease, sell, offer to sell, distribute, or otherwise transfer rights to the Application or Data; (d) develop, sell or distribute applications that integrate with the Application or otherwise make use of the Data; (e) remove any proprietary notices or labels on or relating to the Application or Data; or (f) use the Application or Data in any manner that could impair any Application that we may own or operate currently or in the future or in any way or interfere with any party's use and enjoyment of the Application.
                    You acknowledge that you must be a current subscriber to certain of our Subscription Offerings in order to access the subscriber-only features of the Application.
                    All right, title and interest in and to the Application and Data (including without limitation all intellectual property rights) shall remain property of Tonbridge Health.  
                </li>
                <li className='terms-item'>
                    <strong>Termination</strong><br/>
                    You acknowledge that we have the right to restrict access to, terminate, or otherwise modify the Application for any reason. If you are a subscriber to a Subscription Offering, your license to access the subscriber-only features of the Application will terminate automatically upon termination of the Subscription Agreement.
                </li>
                <li className='terms-item'>
                    <strong>Disclaimers of Warranties</strong><br/>
                    PLEASE NOTE THE FOLLOWING IMPORTANT DISCLAIMERS OF WARRANTIES:
                    The Application and Data are provided "as is" and without warranties of any kind, either express or implied. We disclaim all warranties, express or implied, including but not limited to warranties of title or implied warranties of merchantability, fitness for a particular purpose, compatibility, security, accuracy or non-infringement. Tonbridge health provides the Data available through the Application solely to help you follow Tonbridge Health’s guidance and makes no representations or warranties as to the accuracy or completeness of such Data. The Data and information available through the Application do not reflect all of the information available on, and may actually differ from, the actual product packaging of any food product.
                    Neither Tonbridge Health, any of our affiliates or licensors, licensees, service providers or suppliers warrant that the Application or Data will be uninterrupted or error-free or that defects will be corrected.
                    YOUR USE OF THE APPLICATION AND DATA IS AT YOUR SOLE RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR HANDHELD OR LOSS OF DATA THAT RESULTS FROM SUCH USE.
                    NEITHER TONBRIDGE HEALTH, ANY OF OUR AFFILIATES, NOR ANY OF OUR OR THEIR RESPECTIVE LICENSORS, LICENSEES, SERVICE PROVIDERS OR SUPPLIERS WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE APPLICATION OR DATA IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.
                    The Data available through this application is provided to help you follow the Tonbridge Health weight loss plan. Any trademarks and brands displayed within the application are the marks of their respective owners.
                </li>
                <li className='terms-item'>
                    <strong>Limitation of Liability</strong><br/>
                    YOU EXPRESSLY UNDERSTAND AND AGREE THAT WE AND OUR AFFILIATES, SUPPLIERS AND LICENSORS SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR ANY OTHER DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), ARISING OUT OF, OR RESULTING FROM, (A) THE USE OR THE INABILITY TO USE THE APPLICATION OR DATA; OR (B) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM USE OF THE APPLICATION OR DATA, OR ANY DEFECT THEREIN. IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION IN CONNECTION WITH THE APPLICATION (WHETHER IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE), OR OTHERWISE) EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR THE APPLICATION.  IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE APPLICATION OR DATA, OR WITH ANY PROVISION OF THIS AGREEMENT, YOUR SOLE AND EXCLUSIVE REMEDY IS THE DISCONTINUATION OF YOUR USE OF THE APPLICATION. 
                </li>
                <li className='terms-item'>
                    <strong>Export and Other Laws</strong><br/>
                    You may not use the Application or Data in contravention of any federal, state or other applicable laws. Without limiting the foregoing, the Application and Data may be subject to United States and other export control laws, and you agree to comply strictly with all such laws which are now or hereafter in effect.  In particular, but without limitation, you may not export or re-export the Application: (a) into any United States embargoed countries or (b) to anyone on the United States Treasury Department's list of Specially Designated Nationals or the United States Department of Commerce Denied Person's List or Entity List. By using the Application, you represent and warrant that you are not located in any such country or on any such list. You also agree that you will not use these Services for any purposes prohibited by United States or other applicable law, including, without limitation, the development, design, manufacture or production of missiles, nuclear or chemical or biological weapons.
                </li>
                <li className='terms-item'>
                    <strong>Contact Information. </strong><br/>
                    If you have any comments or questions, please contact us by E-mail at: support@askmeg.ai
                </li>
                <li className='terms-item'>
                    <strong>Indemnification</strong><br/>
                    You agree to indemnify, hold harmless and, at our option, defend us and our affiliates, and our and their officers, directors, employees, stockholders, agents and representatives from any and all third party claims, liability, damages and/or costs (including, but not limited to, reasonable attorney’s fees and expenses) arising from your improper use of this Application or Data, your violation of this Agreement, or your infringement, or the infringement or use by any other user of your account, of any intellectual property or other right of any person or entity.
                </li>
                <li className='terms-item'>
                    <strong>Governing Law </strong><br/>
                    This Agreement shall be governed by and construed in accordance with the laws of the State of Illinois, without giving effect to any principles of conflicts of law. You agree that any action at law or in equity arising out of or relating to your use of this Application or Data or this Agreement shall be filed only in the state or federal courts located in Chicago, IL and you hereby consent and submit to the personal jurisdiction of such courts for the purposes of litigating any such action.
                </li>
                <li className='terms-item'>
                    <strong>Confidentiality</strong><br/>
                    You are entirely responsible for maintaining the confidentiality of your password and user account information. You must notify us immediately in the event of any known or suspected unauthorized use of your user account, or any known or suspected breach of security, including loss, theft, or unauthorized disclosure of your or anyone else’s password or credit card information. In the event of a breach of security by you, you will remain liable for any unauthorized use of your subscription until you update your Subscription Data. If your credit card expires, is canceled, is lost or is subject to use without your authorization, access the Account Settings feature of this Website to update your Subscription Data. You are entirely responsible for any and all activities which occur under your user account. You are responsible for paying any amounts billed to your credit card by a third party which were not authorized by you.
                </li>
                <li className='terms-item'>
                    <strong>Fees</strong><br/>
                    The fees, including the full monthly fee for any month (or portion thereof) elapsed and any sign-up or starter fee, are non-refundable except as set forth below:
                    If you are cancelling your subscription within 5 days (or such other period as required by law) of your initial purchase, we will refund the full amount of such initial purchase; 
                    If your subscription is cancelled due to pregnancy or other medical reason prior to the end of a period for which you have incurred a charge, then, with the exception of any fixed upfront fee we may have charged, we will refund the unused portion of such period. 
                    If we terminate your subscription (as opposed to you canceling your subscription), other than due to your violation of this Agreement, prior to the end of a period for which you have incurred a charge, with the exception of any fixed upfront fee (e.g. the sign-up fee), we will refund any unused portion of such period on a pro rata basis.
                    If you cancel your subscription and are entitled to any refund, we reserve the right to charge a fee to cover the cost to us of any administrative or other services you may have used prior to your cancellation, to the extent permitted by law.
                    Notwithstanding anything in this Agreement to the contrary, purchases made within the Apps downloaded from the Apple iTunes store or Google Play store are not refundable.
                </li>
                <li className='terms-item'>
                    <strong>Availability of Services</strong><br/>
                    The availability and use of our Fee-Based Services (or any portion thereof) may be limited based on demographic, geographic, health or other criteria as we may establish from time to time. You understand and agree we may disallow you from subscribing to our Fee-Based Services or may terminate your subscription to our Fee-Based Services at any time based on these criteria. For example, pregnant women and individuals under the age of 18 may not subscribe to our Fee-Based Services.
                </li>
                <li className='terms-item'>
                    <strong>Privacy and Security</strong><br/>
                    We are committed to protecting your privacy and security. For more information, you should review our Privacy Policy which is incorporated into this Agreement by reference. 
                </li>
                <li className='terms-item'>
                    <strong>Health Disclaimer</strong><br/>
                    Our Application provides weight loss management and information and content are intended only to assist users in their personal weight loss efforts. Tonbridge Health is not a medical organization and neither Meg nor our staff can give you medical advice or diagnosis. Nothing contained in Application should be construed as such advice or diagnosis. The information and reports generated by us should not be interpreted as a substitute for physician consultation, evaluation, or treatment. You are urged and advised to seek the advice of a physician before beginning any weight loss effort or regimen. This Website, the Apps and the Fee-Based Services are intended for use only by healthy adult individuals and are not intended for use by minors, pregnant women, or individuals with any type of health condition. Such individuals are specifically warned to seek professional medical advice prior to initiating any form of weight loss effort or regimen.
                </li>
                <li className='terms-item'>
                    <strong>Restrictions on Use of Materials</strong><br/>
                    You acknowledge that the Application contains information, software, photos, video, text, graphics, music, sounds, questions, creative suggestions, messages, comments, feedback, ideas, recipes, notes, drawings, articles and other materials (collectively, "Content") that are protected by copyrights, patents, trademarks, trade secrets or other proprietary rights, and that these rights are valid and protected in all forms, media and technologies existing now or hereafter developed. 
                    All trademarks appearing in the Application are trademarks of their respective owners. Meg is the service name of Tonbridge Health. Our commercial partners, suppliers, advertisers, sponsors, licensors, contractors and other third parties may also have additional proprietary rights in the Content which they make available on the Application. You may not modify, publish, transmit, distribute, perform, participate in the transfer or sale, create derivative works of, or in any way exploit, any of the Content, in whole or in part. When Content is downloaded to your computer or mobile phone, you do not obtain any ownership interest in such Content. Modification of the Content or use of the Content for any other purpose, including, but not limited to, use of any Content in printed form or on any other website or networked computer environment is strictly prohibited unless you receive our prior written consent.
                </li>
                <li className='terms-item'>
                    <strong>Community Standards and Conduct Guidelines</strong><br/>
                    Please refer to our Community Code of Conduct
                </li>
                <li className='terms-item'>
                    <strong>Submissions</strong><br/>
                    If, at our request or on your own, you send, email, post or otherwise transmit to our Application any Content (collectively, the "Submissions"), you grant Tonbridge Health and its successors and assigns a royalty-free, perpetual, irrevocable, non-exclusive right (including any moral rights) and license (and  consent) to use, license, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, derive revenue or other remuneration from, communicate to the public, perform and display any Submissions (in whole or in part and with or without the use of your name) and to incorporate the Submissions in other works in any form, media, or technology now known or later developed, for the full term of any copyrights, trademarks and other intellectual and proprietary rights (collectively, the “Rights”) that may exist in such Submissions. You also warrant that, to the extent you are not the exclusive holder of all Rights in a Submission, any third-party holder of any Rights, including moral rights in such Submissions, has completely and effectively waived all such rights and validly and irrevocably granted to you the right to grant the license stated above. You further acknowledge that Tonbridge Health and its successors and assigns shall be entitled to unrestricted use of the Submissions for any purpose whatsoever, commercial or otherwise, without compensation to the provider of the Submissions. You also permit any user to access, display, view, store and reproduce any Submission that you have made available in our Community for personal use. Subject to the foregoing, the owner of a Submission placed on the Application retains any and all Rights that may exist in such Submission. Except as provided in our Privacy Policy none of the Submissions shall be subject to any obligation of confidence on our part, and we shall not be liable for any use or disclosure of any Submissions.
                </li>
                <li className='terms-item'>
                    <strong>Parental or Guardian Permission</strong><br/>
                    Some of the Content on the Application may not be appropriate for children. CHILDREN UNDER THE AGE OF 13 ARE NOT PERMITTED TO USE OUR APPLICATION. We strongly recommend that children between the ages of 13 and 18 ask for their parent's or guardian's permission before viewing this Website or the Apps. INDIVIDUALS UNDER THE AGE OF 18 ARE NOT PERMITTED TO SUBSCRIBE.
                </li>
                <li className='terms-item'>
                    <strong>Links</strong><br/>
                    This Agreement applies only our Application and Data, and not to the websites or applications of any other person or entity. We may provide, or third parties may provide, links to other worldwide websites or resources. You acknowledge and agree that we are not responsible for the availability of such external sites or resources, and do not endorse (and are not responsible or liable for) any content, advertising, Services, or other materials on or available from such websites or resources. You further acknowledge and agree that, under no circumstances, will we be held responsible or liable, directly or indirectly, for any loss or damage that is caused or alleged to have been caused to you in connection with your use of, or reliance on, any content, advertisements, Services or other resources available on any other website (regardless of whether we directly or indirectly link to such content, advertisements, Services or other resources). You should direct any concerns with respect to any other website to that website's administrator.
                </li>
                <li className='terms-item'>
                    <strong>Copyright Complaints</strong><br/>
                    We respect the intellectual property of others, and we ask our users to do the same. We may, in appropriate circumstances and in our sole discretion, terminate the rights of any user to use our Application (or any part thereof) who infringes the intellectual property rights of others. 
                </li>
                <li className='terms-item'>
                    <strong>Relationship with Tonbridge Health</strong><br/>
                    Meg is owned by Tonbridge Health. Tonbridge Health is authorized to use the Tonbridge Health and Meg brands and intellectual property on the Internet. 
                </li>
                <li className='terms-item'>
                    <strong>Miscellaneous Terms</strong><br/>
                    In any action against us arising from the use of our Application the prevailing party shall be entitled to recover all legal expenses incurred in connection with the action, including but not limited to its costs, both taxable and non-taxable, and reasonable attorney's fees.
                    If any provision of these terms shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these terms and shall not affect the validity and enforceability of any remaining provisions. This Agreement, together with the Terms & Conditions (if applicable) and any Additional Terms, are the entire agreement between you and us relating to the subject matter herein. In the event of any conflict between this Agreement, the Additional Terms and the Terms & Conditions, this Agreement shall control.
                    This Agreement may be modified only by our posting of changes to this Agreement in the Application, or by written agreement of both parties. Each time you access this Website or the Apps, you will be deemed to have accepted any such changes.
                    We may assign our rights and obligations under this Agreement. This Agreement will inure to the benefit of our successors, assigns and licensees. The failure of either party to insist upon or enforce the strict performance of the other party with respect to any provision of this Agreement, or to exercise any right under this Agreement, will not be construed as a waiver or relinquishment to any extent of such party's right to assert or rely upon any such provision or right in that or any other instance; rather, the same will be and remain in full force and effect.
                </li>
            </ol>
            <div className='terms-intro' ref={privacyPolicyRef}>
                <strong>Privacy Policy</strong><br/>
                This Privacy Policy governs our Application (as defined in our Use of Application Agreement) and explains how we collect your personal information, how we protect such information, and the choices you have concerning the use of such information.  Your privacy and the security of your personally identifiable information are very important to us. We want you to be as comfortable as possible using our Application. Please read this Privacy Policy carefully. Except as we disclose in this Privacy Policy, we will not sell, share, license, trade, or rent your personally identifiable information to others.
                We may amend this Privacy Policy from time to time. We will post any changes to this Privacy Policy here so that you will always know what information we gather, how we might use that information, and whether we will disclose that information to anyone. Please refer back to this Privacy Policy on a regular basis. 
                By using our Application, you agree to the terms of this Privacy Policy.
                Please remember that this Privacy Policy applies only to information collected by our Application. We are not responsible for the privacy of any information you reveal or post in any public forum (e.g., message board, blog, personal page, etc.) or through the "Public Profile" feature available on our Application, or for the privacy practices of websites that are operated or owned by third parties.
            </div>
            <ol className='terms-list'>
                <li>
                    <strong>We collect personally identifiable information.</strong><br/>
                    Personally identifiable information is information that identifies you or 
                    can be used to identify or contact you ("Personally Identifiable Information"). 
                    Such Personally Identifiable Information may include your name, address, email address, 
                    telephone number, birth date and other data you disclose to us when using the Application. 
                    We may request Personally Identifiable Information from you when you register or subscribe 
                    to our Application. In all of these cases, we will collect Personally Identifiable Information 
                    from you only if you voluntarily submit such information to us. Unless you give us permission 
                    to do so, we will not sell, share, license, trade or rent your Personally Identifiable 
                    Information other than as specified in this Privacy Policy.
                </li>
                <li><strong>Information from Other Sources.</strong><br/>
                We may also supplement the information we collect with information from other sources to assist us in evaluating and improving our Application, to determine your preferences so that we can tailor our Application to your needs, or to study nutritional, weight-loss, behavioral and fitness questions in general.
                </li>
                <li>
                    <strong>The information we collect.</strong><br/>
                    The following is a description of the primary ways we collect information about you.
                    <br/>
                    <em className='terms-italics'>Becoming a Registered User.</em>
                    <br/>
                    In order to access certain services, such as conversing with Meg, using our weight-loss and nutritional services, you must first complete certain steps to become a registered user or subscriber. During these steps, you may be required to provide us with information (including Personally Identifiable Information) such as name, zip code, email address, phone number, date of birth and, if you subscribe to one of our Online Services, payment and billing information. This information is used to help us understand who uses our Online Services, to contact users about requested Online Services or for subscription billing purposes. 
                    Tracking Technologies.
                    Tonbridge Health uses cookies and similar technologies to analyze trends and administer our services. We may receive reports based on the use of these technologies by these companies on an individual as well as aggregated basis.  Users can control the use of cookies at the individual browser level. 
                    <br/>
                    <em className='terms-italics'>Social Media (Features) and Widgets</em>
                    <br/>
                    Our Online Services includes social media features, buttons and widgets provided by third party social media platforms (collectively, the "Features"). A Feature may set a cookie to enable the Feature to function properly. 
                    <br/>
                    <em className='terms-italics'>Testimonials</em>
                    <br/>
                    We may display personal testimonials of satisfied customers on our site in addition to other endorsements.  With your consent we may post your testimonial along with your name.  If you wish to delete your testimonial from our Website, you can contact us at support@askmeg.ai. 
                    Linking your account with third party applications and devices
                    We may offer you the option to connect your Application account with third party applications or devices (each a "Tracker") such as activity trackers that measure your activity level (e.g. the number of steps and distance walked, calories burned and other personal metrics). 
                    <br/>
                    <em className='terms-italics'>Referral Programs</em>
                    <br/>
                    Through third party referral program operators and others, we offer referral programs whereby referral websites can earn commissions through the referral of subscribers or other purchasers to our Website. To track the earning of such commissions, and to determine the effectiveness of the referral programs, the users who become subscribers to our Online Services or purchasers through such referral websites are tracked using technologies that do not include Personally Identifiable Information (such as cookies). Our program operators and the referral websites themselves can only access information such as data relating to the number of impressions served, the number of transactions completed, and their resulting earnings. They cannot access our customers' personal data.
                    If you choose to apply to be a referral website, we use the data you provide strictly for conducting business with you. We have entered into certain agreements with third party program operators for the purpose of administering our referral programs. Should you become a referral website of ours through one of our third-party program operators, any information you provide to them is subject to their privacy policies.
                    Public Forums and the Public Profile Feature
                    We feature public forums such as those contained in the community areas where you and other users of our Application can communicate with one another. In addition, we permit you to share information about yourself (including, if you elect, Personally Identifiable Information) with others.
                    THIS PRIVACY POLICY DOES NOT PROTECT YOU WHEN YOU USE OUR PUBLIC FORUMS OR PROVIDE INFORMATION (INCLUDING PERSONALLY IDENTIFIABLE INFORMATION) ABOUT YOURSELF THROUGH THE PUBLIC PROFILE FEATURE OR THROUGH ANY COMMUNITY IN OUR APPLICATION. 
                    You should be aware that any information shared in a public forum such as a message board, blog, personal page, posting, group, bulletin board or recipe swap or through our Public Profile feature is public information and may be seen or collected by third parties that do not adhere to our Privacy Policy, although the availability of personal pages or groups identified as "private" may be limited to certain permitted users. However, even information marked "private" may be viewed by our staff. You should think carefully before disclosing any information in any public forum, or through the Public Profile feature, on our Website. For example, you should not select a username that includes personally identifiable information. To request removal of your personally identifiable information from our Community, contact our Privacy Coordinator at the address indicated below.
                    <br/>
                    <em className='terms-italics'>Log Files</em>
                    <br/>
                    As is true of most websites, we gather certain information automatically. This information may include Internet protocol (IP) addresses, browser types, domain names, and other anonymous statistical data involving the use of our Application. This information may be used to analyze trends, to administer the Website, to monitor our Application's use, and to gather general demographic information. 
                    <br/>
                    <em className='terms-italics'>Refer A Friend</em>
                    <br/>
                    Through our referral tools for informing a friend about our Application, we will automatically send your friend a one-time communication containing the information you request to be sent. If you elect to use these referral tools, we will collect from you certain Personally Identifiable Information about your friend such as your friend's name and email address. Your friend may contact us at support@askmeg.ai to request that we remove this information from our database.
                </li>
                <li><strong>Children</strong><br/>
                We are committed to protecting the privacy of children. Our Application is not designed for or directed to children under the age of 13. We do not collect Personally Identifiable Information from any person we actually know is under the age of 13. We urge all parents or guardians to participate in their children's exploration of the Internet, and to teach their children about protecting their personally identifiable information while online.
                </li>
                <li><strong>Use of Information</strong><br/>
                In general, we use the information collected through our Application to help us understand who uses our Application and how it is used, to personalize your experience, to assist you in using our Application, to improve our Application, and for subscription billing purposes, if applicable. 
                Except as set forth in this Privacy Policy or as specifically agreed to by you, we will not disclose any information we gather from you on our Website.
                We may disclose your information (including Personally Identifiable Information) if we believe in good faith that we are required to do so in order to comply with an applicable statute, regulation, rule or law, a subpoena, a search warrant, a court or regulatory order, or other valid legal process. We may disclose Personally Identifiable Information in special circumstances when we have reason to believe that disclosing this information is necessary to identify, contact or bring legal action against someone who may be violating our Use Agreement or to protect the safety or security of our users, our Application or the general public.
                We may provide to third parties information about you that does not allow you to be identified or contacted, including where such information is combined with similar information of other users of our Application. For example, we might inform third parties regarding the number of unique users who visit our Application, the demographic breakdown of the registered users of our Application, or the activities that visitors to our Application engage in while using our Application. The third parties to which we may provide this information may include potential or actual advertisers, providers of advertising services, commercial partners, sponsors, licensees, researchers and other similar parties.
                We may employ independent contractors, vendors and suppliers (collectively, "Outside Contractors") to provide specific services such as developing applications. These Outside Contractors may sometimes have limited access to information collected on our Website, including your Personally Identifiable Information, in the course of providing Services or services to us. Access to your Personally Identifiable Information by these contractors is limited to the information reasonably necessary in order for the Outside Contractors to perform their limited function for us. We also require that these Outside Contractors (i) protect the privacy of your Personally Identifiable Information consistent with this Privacy Policy, and (ii) not use or disclose your Personally Identifiable Information for any purpose other than providing us with Services or services for which we contracted.
                We reserve the right to transfer information to a third party in the event of a sale, merger or other transfer of all or substantially all of the assets of Tonbridge health or in the case of bankruptcy, provided that the third party agrees to adhere to the terms of this Privacy Policy. We will notify users of any such transfer through notice on our site and through email.
                </li>
                <li><strong>Security</strong><br/>
                We want your information (including Personally Identifiable Information) to remain as secure as possible. We strive to provide secure transmission of your information from your computer to our servers through industry-standard techniques. We secure the Personally Identifiable Information you provide on servers located in secure cloud environments, protected from unauthorized access, use, or alteration. Only employees who need access to your information to perform a specific task or function are granted access to such information. In addition, all of our employees must abide by this Privacy Policy and are kept up-to-date on security practices. 
                Notwithstanding the above commitments to protect your information (including Personally Identifiable Information) from loss, misuse or alteration by third parties, you should be aware that there is always some risk involved in transmitting information over the Internet. There is also some risk that others could find a way to thwart our security systems. As a result, while we strive to protect your information, we cannot ensure or warrant the security and privacy of any information you transmit to us, and you do so at your own risk.
                Except as otherwise described in this Privacy Policy, we will only use Personally Identifiable Information for the purposes described above or as otherwise disclosed at the time we request such information from you. 
                </li>
                <li><strong>Updating Your Information</strong><br/>
                Upon request, we will provide you with information about whether we hold any of your personal information. You can always contact us in order to (1) update or correct your Personally Identifiable Information, (2) change your preferences with respect to communications and other information you receive from us, or (3) delete the Personally Identifiable Information maintained about you on our systems, by talking to Meg. Such updates, corrections, changes and deletions will not have an effect on other information that we maintain, or information that we have provided to third parties in accordance with this Privacy Policy prior to such update, correction, change or deletion.
                You should be aware that it is not technologically possible to remove each and every record of the information you have provided to us from our systems. The need to back-up our systems to protect information from inadvertent loss means that a copy of your Personally Identifiable Information may exist in a non-erasable form that will be difficult or impossible for us to locate. We promise that promptly after receiving your request, all Personally Identifiable Information stored in databases we actively use and other readily searchable media will be updated, corrected, changed or deleted, as appropriate. We will respond to your request promptly.
                We retain your information for various purposes as allowed by law, including to ensure that we can continue to provide our services to you as requested, that we respect your opt-out wishes into the future and that we can comply with our legal obligations. 
                </li>
                <li><strong>Updates To This Policy</strong><br/>
                If we change this Privacy Policy, we will post those changes on our Application so you are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. If at any point we decide to use Personally Identifiable Information in a manner significantly different from that stated in this Privacy Policy, or otherwise disclosed to you, at the time it was collected, we will notify you, and you will have a choice as to whether or not we use your Personally Identifiable Information in the new manner. We may also make non-significant changes to our Privacy Policy that generally will not affect our use of your Personally Identifiable Information. If you do not agree to the terms of this Privacy Policy, you should not use our Application. 
                </li>
            </ol>
        </div>
    );
}

export default UseOfApplication;