
    var btnPrevious = $('#btnPrevious');
    $(function () {
        btnPrevious = $('#btnPrevious');
        btnPrevious.click(function () {
            //            alert("previous");
            window.location = "/Account/Expertise"

        });

    });

    animatedcollapse.addDiv('hdr2', 'fade=0,speed=400,height=128px,hide=1');
    animatedcollapse.ontoggle = function ($, divobj, state) { //fires each time a DIV is expanded/contracted
        //$: Access to jQuery
        //divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
        //state: "block" or "none", depending on state
    }
    function info_mouse_over(td_obj) {
        if (td_obj.className == "hdr_info3") { td_obj.className = "hdr_info4"; } else { td_obj.className = "hdr_info2"; }
    }
    function info_mouse_out(td_obj) {
        if (td_obj.className == "hdr_info4") { td_obj.className = "hdr_info3"; } else { td_obj.className = "hdr_info1"; }
    }
    function info_mouse_click(td_obj) {
        if (td_obj.className == "hdr_info1") { n = "hdr_info3"; animatedcollapse.toggle('hdr2'); }
        if (td_obj.className == "hdr_info2") { n = "hdr_info4"; animatedcollapse.toggle('hdr2'); }
        if (td_obj.className == "hdr_info3") { n = "hdr_info1"; animatedcollapse.toggle('hdr2'); }
        if (td_obj.className == "hdr_info4") { n = "hdr_info2"; animatedcollapse.toggle('hdr2'); }
        td_obj.className = n;
    }
    animatedcollapse.init();

    function set_cr_height() {
        //alert($(window).height());

        //alert(document.getElementById('hdr2').name);

        //$('util_cr.class').css('height', $(window).height()+'px');


    }
    function yr(yr_no) {
        var f_yr;

        if (yr_no < 2000) { f_yr = yr_no - 1900; }
        else if (yr_no < 2010) { f_yr = "0" + (yr_no - 2000); }
        else f_yr = (yr_no - 2000);
        return (f_yr);
    }
    function yr_timeline(s_year, e_year) {
        var x;
        var yr_span = (e_year - s_year) + 1;

        var tab_htm = "<table cellpadding=0 cellspacing=0 width=100%><tr>";
        for (x = s_year; x <= e_year; x += 1) {
            tab_htm = tab_htm + "<td class='cr_txt3' width=" + (100 / yr_span) + "%>" + yr(x) + "</td>";
        }

        tab_htm = tab_htm + "</tr></table>";
        document.getElementById("year_timeline").innerHTML = tab_htm;
    }
    function addJob(prm_id, prm_firm_long, prm_title_long, prm_location, prm_firm, prm_title, prm_start, prm_end, prm_merge) {
        var x = jobArray.length;
        jobArray[x] = new Array(10);
        jobArray[x].Id = prm_id;
        jobArray[x].Firm_Long = prm_firm_long;
        jobArray[x].Title_Long = prm_title_long;
        jobArray[x].Location = prm_location;
        jobArray[x].Firm = prm_firm;
        jobArray[x].Title = prm_title;
        jobArray[x].Start = new Date(prm_start);
        jobArray[x].StartStr = dateToStr(jobArray[x].Start);
        if (prm_end == "") {
            var curr_date = new Date();
            jobArray[x].End = new Date(curr_date.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
            jobArray[x].EndStr = "Present";
        }
        else {
            jobArray[x].End = new Date(prm_end);
            jobArray[x].EndStr = dateToStr(jobArray[x].End);
        }
        jobArray[x].Merge = prm_merge;
    }
    function sort_by_date(a, b) {
        var x = a.Start;
        var y = b.Start;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    function isAltRow(x) { return (x % 2) ? 1 : 2; }
    function isEven(x) { return (x % 2) ? false : true; }
    function sleep(milliSeconds) {
        var startTime = new Date().getTime(); // get the current time
        while (new Date().getTime() < startTime + milliSeconds); // hog cpu
    }

    function display_jobs(prm_direction) {
        var jtoshow = document.getElementById("jobs_to_show").innerHTML;
        if (prm_direction == "+") { jtoshow++; } else if (prm_direction == "-") { jtoshow--; }
        document.getElementById("jobs_to_show").innerHTML = jtoshow;
        pop_timelines(jtoshow);
        pop_data();
        jobArray.sort(sort_by_date);
    }

    function pop_data() {
        jobArray = new Array();
        jobDetails = new Array();

        addJob(1, "Akamai Technologies", "Sr. Business Intelligence Architect", "Cambridge, MA", "Akamai", "Sr. BI Architect", "07/01/2009", "", "");
        addJob(2, "Lenovo Corporation", "Business Intelligence Consultant", "Durham, NC", "Lenovo", "BI Consultant", "04/01/2008", "07/01/2009", "");
        addJob(3, "M|C Communications", "Business Intelligence Consultant", "Boston, MA", "MC Comm.", "BI Consultant", "07/01/2006", "04/01/2008", "");
        addJob(4, "Areva", "Business Intelligence Consultant", "Meriden, CT", "Areva", "BI Consultant", "08/01/2005", "06/01/2006", "");
        addJob(5,"EMD Serono", "Business Intelligence Consultant", "Rockland, MA", "EMD Serono","BI Consultant","04/01/2003","08/01/2005","");
        addJob(6,"Verispan", "Business Intelligence Consultant", "Waltham, MA", "Verispan","BI Consultant","01/01/2003","04/01/2003","");
        addJob(7,"Investment Technology Group", "Business Intelligence Consultant", "Boston, MA", "ITG","BI Consultant","10/01/2001","12/01/2002","");
        addJob(8,"Palm Computing", "Business Intelligence Consultant", "Cambridge, MA", "Palm Computing","BI Consultant","03/01/2001","10/01/2001","");
        addJob(9,"Akamai Technologies", "Technical Team Leader", "Cambridge, MA", "Akamai","Tech. Team Leader","04/01/2000","03/01/2001","Y");
        addJob(10,"Akamai Technologies", "Senior Developer", "Cambridge, MA", "Akamai","Senior Developer","10/01/1999","04/01/2000","");
        addJob(11,"Oracle Corporation", "Sr. Member of the Technical Staff", "Waltham, MA", "Oracle Corp","Sr. Member Tech Staff","10/01/1997","10/01/1999","");
        addJob(12,"IMS", "Business Intelligence Consultant", "Philadelphia, PA", "IMS","BI Consultant","08/01/1996","09/01/1997","");
        addJob(13,"BellSouth", "Report Developer", "Atlanta, GA", "BellSouth","Report Developer","05/01/1995","08/01/1996","");
        
        addJobDetails(1, 1, "Generated Robot, Akamai’s Revenue Forecasting system, which is used to generate company revenue forecasts announced each quarter to Wall Street analysts. This system forecasts internet traffic for every Akamai client, identifying client-specific trending and seasonality. It then runs these forecasts through our Invoicing system, to generate a very detailed revenue forecast. In its first quarter of operations, Revenue was forecasted within 1% -- a substantial improvement over Akamai’s historical 5-8% forecast accuracy.");
        addJobDetails(2, 1, "Proposed, designed and developed LGOS (Lenovo Global Order Status), a reporting application that handles all Lenovo order reporting, for internal business users, external partners and major customers.");
        addJobDetails(2, 2, "Built a data model and reporting system, AppTracker, for Lenovo to track and report upon over five thousand IBM and Lenovo business applications. This is part of its strategy to fully separate Lenovo's business activities from IBM's, and to migrate Lenovo to its own long-term IT platform.");
        addJobDetails(3, 1, "Conducted extensive interviews with upper level management throughout the organization to precisely define its business nomenclature (e.g., product, account, event, stage, track, etc). Once precise definitions were defined, this nomenclature was published and distributed throughout the organization.");
        addJobDetails(3, 2, "Designed and implemented SLX-Report, M|C’s enterprise-wide sales reporting system. This reporting system provides up-to-the-minute sales reporting across the entire organization, using the unified business nomenclature.");
        addJobDetails(3, 3, "Integrated SLX-Report into the company's operations management system, to automatically notify operations project leaders and help define a proper sales commissions policy – further unifying M|C’s business processes.");
        /*  addJobDetails(4,1,"Developed and implemented Prospector, a global Business Intelligence system that merges business activity from seven sales offices and six manufacturing plants in the United States, Belgium, Canada, Denmark, France, Germany, Japan, Russia and the United Kingdom");
        addJobDetails(4,2,"Prospector allows upper management to see total company sales, on an up-to-the-moment basis, in any currency used within the organization. It also provides tight coordination between sales offices and manufacturing plants, to quickly route sales to the optimal manufacturing plant. This routing process uses a sophisticated algorithm that assesses the customer’s desired delivery date, current plant utilization levels, the specific items ordered, plant/customer proximity, and even country-specific customs issues.");
        addJobDetails(4,3,"Prospector’s global implementation involved designing over-arching data flow diagrams (illustrating the entire lifecycle of all data flowing into the company, through validation / normalization / aggregation, and into the data warehouse); full network topologies (illustrating every machine, connection, application, protocol and operating system); logical and physical data models; and ETL documentation standards used by on-site warehousing teams in each country.");
        */
    }
    function setTabs(prm_tr, prm_set) {
        // This particularly crappy function finds the tr the user has selected and changes the background of the cells
        // I say "particularly crappy" because it was hard to write and no doubt twice as hard to read, because it
        // leverages DOM table logic to hop around based upon the incoming tr.
        // Let's hope we never have to debug it.
        // set a few starting values
        var tr_table = prm_tr.parentNode;      				// this is the parent table
        var tr_table_rows = prm_tr.parentNode.rows.length; 	// # rows in parent table
        var title_count = 0;
        var title_class;
        var body_class;
        var next_row;

        // set the class variables
        if (prm_set == "on") { title_class = "res_title2"; detail_class = "res_body2"; }
        else { title_class = "res_title"; detail_class = "res_body"; }


        var found_title = false;
        // first, go backwards until we've found the res_title
        while (found_title == false) {
            if (prm_tr.cells[1].className == "res_title" | prm_tr.cells[1].className == "res_title2") { found_title = true; }
            else { prm_tr = prm_tr.parentNode.rows[prm_tr.rowIndex - 1]; }
        }

        var starting_row = prm_tr.rowIndex; 				// the selected tr row's position in the parent table

        // set the title row's tds
        for (var z = 0; z < prm_tr.cells.length; z++) { prm_tr.cells[z].className = title_class; }

        for (var x = starting_row + 1; x < tr_table_rows; x++) {
            next_row = tr_table.rows[x].cells;
            if (next_row[1].className == "res_title") { x = tr_table_rows; }
            else {
                for (var a = 1; a < next_row.length; a++) { next_row[a].className = detail_class; }
            }
        }
    }
    function pop_details() {
        var jobHTM = "<table border=0 cellpadding=0 cellspacing=0 border=0 width=\"100%\">";
        // sort jobs
        jobArray.sort(sort_by_date);
        // for each job
        for (var z = jobArray.length - 1; z > 0; z--) {
            // print the title
            jobHTM += "<tr class=\"hdr\" onclick=\"javascript:edit_job(\'" + getJobKey(jobArray[z].Id) + "\');\" onmouseout=\"javascript:setTabs(this,'off');\" onmouseover=\"javascript:setTabs(this,'on');\"><td width=10>&nbsp;</td>";
            jobHTM += "    <td class=\"res_title\" align=\"left\">" + jobArray[z].Firm_Long + "</td>";
            jobHTM += "    <td class=\"res_title\" align=\"left\">" + jobArray[z].Title_Long + "</td>";
            jobHTM += "    <td class=\"res_title\" align=\"right\">" + jobArray[z].Location + "</td>";
            jobHTM += "    <td class=\"res_title\" align=\"right\">" + jobArray[z].StartStr + " - " + jobArray[z].EndStr + "</td>";
            jobHTM += "</tr>";

            for (var y = 0; y < jobDetails.length; y++) {
                if (jobDetails[y].Id == jobArray[z].Id) {
                    jobHTM += "<tr onmouseout=\"javascript:setTabs(this,'off');\" onmouseover=\"javascript:setTabs(this,'on');\" class=\"dtl\"><td width=10>&nbsp;</td>";
                    jobHTM += "<td onclick=\"javascript:edit_job(\'" + getJobKey(jobArray[z].Id) + "\');\" colspan=4 class=\"res_body\"><ul><li>" + jobDetails[y].Detail + "</ul></td></tr>";
                }
            }
        }
        document.getElementById("util_cr").innerHTML = jobHTM;
    }
    function getJobKey(prm_ID) {
        for (var i = 0; i < jobArray.length; i++) { if (jobArray[i].Id == prm_ID) { return i; } }
        return 0;
    }
    function Right(str, n) {
        if (n <= 0)
            return "";
        else if (n > String(str).length)
            return str;
        else {
            var iLen = String(str).length;
            return String(str).substring(iLen, iLen - n);
        }
    }
    function dateToStr(prm_Date) {
        return prm_Date.getMonth() + "/" + Right(prm_Date.getYear(), 2);
    }

    var old_msg;
    var chk_msg;

    function setHelp() {
        var hlpVal = 0;
        if (document.getElementById("chkHelp").checked == true) { hlpVal = 1; chk_msg = 1; } else { chk_msg = ""; }
        document.getElementById("helpNav").value = hlpVal;
    }

    function set_dtl_hdr(prm_button) {
        var v_cr_del = "cr_hdr_del_off";
        var v_cr_mid1 = "cr_hdr_mid_0";
        var v_cr_can = "cr_hdr_can_off";
        var v_cr_mid2 = "cr_hdr_mid_0";
        var v_cr_sav = "cr_hdr_sav_off";
        var v_cr_comment = "";
        switch (prm_button) {
            case 1:
                v_cr_del = "cr_hdr_del_on";
                v_cr_mid1 = "cr_hdr_mid_2";
                v_cr_comment = "del";
                break;
            case 2:
                v_cr_can = "cr_hdr_can_on";
                v_cr_mid1 = "cr_hdr_mid_1";
                v_cr_mid2 = "cr_hdr_mid_2";
                v_cr_comment = "can";
                break;
            case 3:
                v_cr_mid2 = "cr_hdr_mid_1";
                v_cr_sav = "cr_hdr_sav_on";
                v_cr_comment = "save";
                break;
        }
        document.getElementById("cr_del").className = v_cr_del;
        document.getElementById("cr_mid1").className = v_cr_mid1;
        document.getElementById("cr_can").className = v_cr_can;
        document.getElementById("cr_mid2").className = v_cr_mid2;
        document.getElementById("cr_sav").className = v_cr_sav;
    }

    // adding/updating/removing jobs
    // it's far simpler to update the database and reload than to manipulate the arrays

    function cancelJob() { disablePopup(); }

    function edit_job(prm_jKey) {
        var end_str;
        if (jobArray[prm_jKey].EndStr == "Present")
        { end_str = ""; }
        else { end_str = jobArray[prm_jKey].EndStr; }

        var edtHTM = "<div class=\"pop_top\"><a id=\"popupContactClose\"></a>";
        edtHTM += "<table cellpadding=0 cellspacing=0 border=0 width=\"100%\"><tr>";
        edtHTM += "<td colspan=8><table cellpadding=0 cellspacing=0 border=0 width=\"100%\"><tr>";
        edtHTM += "<td class=\"cr_hdr_title0\">Job Editor</td>";
        edtHTM += "<td class=\"cr_hdr_title1\">Hold the mouse over any object for details.</td>";
        edtHTM += "<td id=\"cr_del\" onclick=\"removeJob()\" class=\"cr_hdr_del_off\" title=\"Delete this job, exit to the Career page.\" onmouseover=\"javascript:set_dtl_hdr(1);\"  onmouseout=\"javascript:set_dtl_hdr(0);\"></td>";
        edtHTM += "<td id=\"cr_mid1\" class=\"cr_hdr_mid_0\"></td>";
        edtHTM += "<td id=\"cr_can\" onclick=\"cancelJob()\" class=\"cr_hdr_can_off\" title=\"Don't save changes, exit to the Career page.\" onmouseover=\"javascript:set_dtl_hdr(2);\"  onmouseout=\"javascript:set_dtl_hdr(0);\"></td>";
        edtHTM += "<td id=\"cr_mid2\" class=\"cr_hdr_mid_0\"></td>";
        edtHTM += "<td id=\"cr_sav\" onclick=\"saveJob()\" class=\"cr_hdr_sav_off\" title=\"Save changes, exit to the Career page	.\" onmouseover=\"javascript:set_dtl_hdr(3);\"  onmouseout=\"javascript:set_dtl_hdr(0);\"></td>";
        edtHTM += "</tr></table></td></tr><tr>";
        edtHTM += "<td width=10 class=\"util_txt2\">&nbsp;</td>";
        edtHTM += "<td colspan=3><table width=\"98%\"><tr><td width=\"100%\" class=\"cr_pop_txt7\">Position</td></tr></table></td>";
        edtHTM += "<td colspan=2><table width=\"90%\"><tr><td class=\"cr_pop_txt7\">Dates</td></tr></table></td>";
        edtHTM += "<td colspan=2><table width=\"96%\"><tr><td class=\"cr_pop_txt7\">Timeline</td></tr></table></td></tr>";
        edtHTM += "<td width=10 class=\"util_txt2\">&nbsp;</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">Firm Name</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">Job Title</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">Location</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">From</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">To</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">Firm</td>";
        edtHTM += "<td class=\"cr_pop_txt5\">Title</td></tr>";
        edtHTM += "<tr><td width=10 class=\"util_txt2\">&nbsp;</td>";

        edtHTM += "<td><input type=\"long\" id=\"txt_Firm_Long\" title=\"What was the name of the place where you worked?<br>Ex: Acme Corporation\" onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].Firm_Long=this.value;\" value=\"" + jobArray[prm_jKey].Firm_Long + "\" /></td>";
        edtHTM += "<td><input type=\"long\" name=\"txt_Title_Long\" title=\"What was your official job title?  Ex: Senior Business Analyst\" onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].Title_Long=this.value;\" value=\"" + jobArray[prm_jKey].Title_Long + "\" /></td>";
        edtHTM += "<td><input type=\"medium\" name=\"txt_Location\" title=\"Where was your job located?  Ex: Boston, MA\" onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].Location=this.value;\" value=\"" + jobArray[prm_jKey].Location + "\" /></td>";
        edtHTM += "<td><input type=\"short\" name=\"txt_Start\" title=\"When did you start this job (month/date)?  Ex: 01/12\" onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].Start=this.value;\" value=\"" + jobArray[prm_jKey].StartStr + "\" /></td>";
        edtHTM += "<td><input type=\"short\" name=\"txt_End\" title=\"When did you leave this job? (Blank if you're still there!)\" onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].End=this.value;\" value=\"" + end_str + "\" /></td>";
        edtHTM += "<td><input type=\"medium\" name=\"txt_Firm\" title=\"How should the company appear on the timeline (keep it short)?  Ex: ACME Corp\"  onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].Firm=this.value;\" value=\"" + jobArray[prm_jKey].Firm + "\" /></td>";
        edtHTM += "<td><input type=\"medium\" name=\"txt_Title\" title=\"How should your job appear on the timeline (keep it short)?  Ex: Sr. Analyst\" onkeyup=\"javascript:jobArray[" + jobArray[prm_jKey].Id + "].Title=this.value;\" value=\"" + jobArray[prm_jKey].Title + "\" /></td></tr>";
        edtHTM += "<tr><td colspan=8 class=\"cr_pop_txt5\">";
        edtHTM += "<table width=100% border=0><tr>";
        edtHTM += "<td width=40></td><td class=\"cr_pop_txt5\">Details</td>";
        edtHTM += "</tr></table></td></tr>";

        var jobCounter = 0;
        for (var y = 0; y < jobDetails.length; y++) {
            if (jobDetails[y].Id == jobArray[prm_jKey].Id) {
                jobCounter += 1;
                edtHTM += "<tr><td colspan=8><table><tr>";
                edtHTM += "  <td id=\"sort_up" + jobCounter + "\" title=\"Move this job detail up.\" class=\"cr_sortup_off\" onmouseover='javascript:sort_mouse_event(" + jobCounter + ",\"up\",\"over\")' onmouseout='sort_mouse_event(" + jobCounter + ",\"up\",\"out\")' onclick=\"javascript:sortCr(" + jobCounter + ",1)\"></td>";
                edtHTM += "  <td id=\"sort_down" + jobCounter + "\" title=\"Move this job detail down.\" class=\"cr_sortdown_off\" onmouseover='javascript:sort_mouse_event(" + jobCounter + ",\"down\",\"over\")' onmouseout='sort_mouse_event(" + jobCounter + ",\"down\",\"out\")' onclick=\"javascript:sortCr(" + jobCounter + ",-1)\"></td>";
                edtHTM += "  <td class=\"pop_details\"><textarea id=\"cr_dtl" + jobCounter + "\" onkeyup=\"setSorts();\" title=\"Describe what you did at this job.\">" + jobDetails[y].Detail + "</textarea></td>";
                edtHTM += "  <td class=\"cr_pop_chk\" title=\"Hide this detail from your resume.  (Good when it's a work-in-progress.)\"><input type=\"checkbox\" />H</td>";
                edtHTM += "  <td class=\"cr_pop_chk\" title=\"Private: Don't let others see this in their 'Other People Have Said' section.\" ><input type=\"checkbox\" />P</td>";
                edtHTM += "</tr></table></td></tr>";
            }
        }
        while (jobCounter < 5) {
            jobCounter += 1;
            edtHTM += "<tr><td colspan=8><table><tr>";
            edtHTM += "  <td id=\"sort_up" + jobCounter + "\" title=\"Move this job detail up.\" class=\"cr_sortup_null\" onmouseover='javascript:sort_mouse_event(" + jobCounter + ",\"up\",\"over\")' onmouseout='sort_mouse_event(" + jobCounter + ",\"up\",\"out\")' onclick=\"javascript:sortCr(" + jobCounter + ",1)\"></td>";
            edtHTM += "  <td id=\"sort_down" + jobCounter + "\" title=\"Move this job detail down.\"  class=\"cr_sortdown_null\" onmouseover='javascript:sort_mouse_event(" + jobCounter + ",\"down\",\"over\")' onmouseout='sort_mouse_event(" + jobCounter + ",\"down\",\"out\")' onclick=\"javascript:sortCr(" + jobCounter + ",-1)\"></td>";
            edtHTM += "  <td class=\"pop_details\"><textarea id=\"cr_dtl" + jobCounter + "\" title=\"Describe what you did at this job.\" onkeyup=\"setSorts();\"></textarea></td>";
            edtHTM += "  <td class=\"cr_pop_chk\" title=\"Hide this detail from your resume.  (Good when it's a work-in-progress.)\"><input type=\"checkbox\" />H</td>";
            edtHTM += "  <td class=\"cr_pop_chk\" title=\"Private: Don't let others see this in their 'Other People Have Said' section.\"><input type=\"checkbox\" />P</td>";
            edtHTM += "</tr></table></td></tr>";
        }
        edtHTM += "</table></td></tr></table>";
        edtHTM += "<div class=\"pop_push\"></div>";
        edtHTM += "</div>";
        // now add a spacer row and then the very bottom
        edtHTM += "<div class=\"pop_bottom\">";
        edtHTM += "<table cellpadding=0 cellspacing=0><tr>";
        edtHTM += "    <td class=\"hdr_peek0\">Other people have said...</td>";
        edtHTM += "    <td class=\"hdr_peek1\" title=\"Show what other people said!\" onmouseover=\"this.className='hdr_peek2'\" onmouseout=\"this.className='hdr_peek1'\"></td></tr>";
        edtHTM += "</tr></table>";
        edtHTM += "<table cellpadding=0 cellspacing=0 width=100%><tr height=64><td class=\"cr_peek_spacer\"> </td>";
        edtHTM += "    <td title=\"Reading other people's descriptions might help you describe your own.\" class=\"cr_txt_peek\">Ambitious, results-oriented software engineer seeks a full-time position at a socially-responsible biotech or technology firm, where I can leverage my web development and interpersonal skills.</td>";
        edtHTM += "     <td class=\"cr_peek_spacer\"> </td></tr>";
        edtHTM += "</table></td></tr></table>";
        edtHTM += "</div>";

        document.getElementById("popupContact").innerHTML = edtHTM;
        centerPopup();
        loadPopup();
    }

    function isCar(prm_sort_row) {
        if (document.getElementById("cr_dtl" + prm_sort_row).value.length > 0) { return true; } else { return false; }
    }

    function setSorts() {
        var prm_sort_row = 1;
        while (prm_sort_row <= 5) {
            //alert("cr_dtl"prm_sort_row +" is " + document.getElementById("cr_dtl"+prm_sort_row).value);
            if (document.getElementById("cr_dtl" + prm_sort_row).value.length > 0) {
                document.getElementById("sort_up" + prm_sort_row).className = "cr_sortup_off";
                document.getElementById("sort_down" + prm_sort_row).className = "cr_sortdown_off";
            }
            else {
                document.getElementById("sort_up" + prm_sort_row).className = "cr_sortup_null";
                document.getElementById("sort_down" + prm_sort_row).className = "cr_sortdown_null";
            }
            prm_sort_row += 1;
        }
    }

    function sortCr(id_num, sort_dir) {
        var tgt_dtl;
        var target_row;
        var source_row = id_num;

        // Note: we actually reverse the sort_dir parameter, because what appears to be going "down" on the html page is
        // going "up" in our list -- meaning that #2 is below #1, and #3 is below #2.  Sorry, I know that's a bit confusing.
        sort_dir = sort_dir * -1;
        if (document.getElementById("sort_up" + id_num).className != "cr_sortup_null") {
            // determine our target row
            target_row = source_row + sort_dir;
            if (target_row == 0) { target_row = 5; }
            if (target_row == 6) { target_row = 1; }

            tgt_dtl = document.getElementById("cr_dtl" + target_row).value;
            document.getElementById("cr_dtl" + target_row).value = document.getElementById("cr_dtl" + id_num).value;
            document.getElementById("cr_dtl" + id_num).value = tgt_dtl;
            setSorts();
        }
    }


    function sort_mouse_event(sort_row, sort_dir, sort_event) {
        var newClass = "cr_sort";
        var row_dist = isCar(sort_row);

        if (sort_event == "over")
        { if (row_dist == true) { newClass += sort_dir + "_on"; } else { newClass += sort_dir + "_null"; } }

        if (sort_event == "out")
        { if (row_dist == true) { newClass += sort_dir + "_off"; } else { newClass += sort_dir + "_null"; } }


        document.getElementById("sort_" + sort_dir + sort_row).className = newClass;
    }

    function addJobDetails(prm_id, prm_order, prm_details) {
        var x = jobDetails.length;
        jobDetails[x] = new Array(3);
        jobDetails[x].Id = prm_id;
        jobDetails[x].Order = prm_order;
        jobDetails[x].Detail = prm_details;
    }
    function pop_timelines(jtoshow) {
        // var dt_max_end = new Date();

        var chk_nums = document.getElementById("chk_job_nums").checked;

        jobArray.sort(sort_by_date);
        var x = new Date();
        var jobBlanks = new Array();
        var job_counter = 0;

        // Step 1: Get boundary years (current year and 15 years back);
        var x = new Date();
        var max_date = new Date(x.getFullYear(), 0, 1, 0, 0, 0, 0);
        var min_date = new Date(x.getFullYear() - 15, 0, 1, 0, 0, 0, 0);
        var true_min_date = max_date;

        var htm = "";
        var splice_check;

        //for(var z = 0; z < jobArray.length; z++){ htm = htm + jobArray[z].Start.getMonth() + "-" + jobArray[z].Start.getYear() + " " + jobArray[z].End.getMonth() + "-" + jobArray[z].End.getYear() + " " + jobArray[z].Firm + " " + jobArray[z].Title + "\n";}


        // Step 2: Loop over jobs, cut off anything outside of our min/max, and cleaning up mis-matching dates.
        for (var y = 0; y < jobArray.length; y++) {
            splice_check = 0;
            if (jobArray[y].End < min_date) { splice_check = 1; }
            else if (jobArray[y].Start < min_date) { jobArray[y].Start = min_date; }

            // Step 2a: if this is the earliest date we've seen (and isn't earlier than our theoretical min date), then remember it
            if (jobArray[y].Start < true_min_date & jobArray[y].Start >= min_date) { true_min_date = jobArray[y].Start; }

            if (jobArray[y].Start > max_date) { splice_check = 1; }
            else if (jobArray[y].End > max_date) { jobArray.End = max_date; }

            // Step 2a: if this job is being merged (which is when a person has multiple positions at the same firm, but wants them all as a single value
            // on the timeline), then use the original start date and company, but the latest end date and title.
            if (y > 0 & jobArray[y].Merge == "Y") {
                jobArray[y - 1].Title = jobArray[y].Title;
                jobArray[y - 1].End = jobArray[y].End;
                splice_check = 1;
            }

            // Step 2b: now, remove the current job if necessary -- and if not, then fill in start/end date gaps if less than a month
            if (splice_check == 1) { jobArray.splice(y, 1); y--; }
            else {
                if (y > 0) { if (jobArray[y - 1].End > (jobArray[y].Start - (32 * 1000 * 24 * 60 * 60))) { jobArray[y - 1].End = jobArray[y].Start; } }
            }
        }

        // Step 3: Loop over the jobs again, and insert values for any blanks.  (Including ones at the start and end, if necessary.)

        for (var y = 1; y < jobArray.length; y++) {
            if (jobArray[y - 1].End < jobArray[y].Start) {
                jobBlanks[jobBlanks.length] = new Array(jobArray[y - 1].End, jobArray[y].Start);
            }
        }

        if (jobArray[0].Start != true_min_date) { jobBlanks[jobBlanks.length] = new Array(true_min_date, jobArray[0].Start); }
        if (max_date - jobArray[jobArray.length - 1].End > (28 * 24 * 60 * 60 * 1000)) {
            jobBlanks[jobBlanks.length] = new Array(jobArray[jobArray.length - 1].End, max_date);
        }

        for (var z = 0; z < jobBlanks.length; z++) {
            addJob("Filler", "", jobBlanks[z][0], jobBlanks[z][1], "");
        }
        jobArray.sort(sort_by_date);


        /*
        htm = "";
        for(var z = 0; z < jobArray.length; z++){ htm = htm + jobArray[z].Start.getMonth() + "-" + jobArray[z].Start.getYear() + " " + jobArray[z].End.getMonth() + "-" + jobArray[z].End.getYear() + " " + jobArray[z].Firm + " " + jobArray[z].Title + "\n";}
        alert(htm);
        */

        // Step 4: Calculate the year timeline
        min_date = jobArray[0].Start;
        max_date = jobArray[jobArray.length - 1].End;

        yr_timeline(true_min_date.getFullYear(), max_date.getFullYear());

        // Step 5: Calculate the career timeline.
        var tl_graph = "<table cellpadding=0 cellspacing=0 height=18 width=100% border=0><tr>";
        var cspan = (max_date - min_date)
        var next_car = 1;
        var counter = 0;
        var counter_disp;

        if (jtoshow >= jobArray.length) { jtoshow = jobArray.length; }

        for (var a = 0; a < jtoshow; a++) {
            tl_graph = tl_graph + "<td ";
            if (jobArray[a].Firm == "Filler") { tl_graph = tl_graph + " class='cr_txt0' "; counter_disp = "&nbsp;"; }
            else {
                tl_graph = tl_graph + " class = 'cr_txt" + next_car + "' ";
                counter++;
                if (chk_nums == true) { counter_disp = counter; } else { counter_disp = "&nbsp;" }
                if (next_car == 1) { next_car = 2; } else { next_car = 1; } 
            }
            tl_graph = tl_graph + " width=" + Math.round((10000 * (jobArray[a].End - jobArray[a].Start)) / cspan) / 100 + "%>" + counter_disp + "</td>";
        }
        tl_graph = tl_graph + "</tr></table>";

        /*	
        htm = "";
        for(var z = 0; z < jobArray.length; z++){ htm = htm + jobArray[z].Start.getMonth() + "-" + jobArray[z].Start.getYear() + " " + jobArray[z].End.getMonth() + "-" + jobArray[z].End.getYear() + " " + jobArray[z].Firm + " " + jobArray[z].Title + "\n";}
        alert(htm);
        */
        document.getElementById("job_tl").innerHTML = tl_graph;

        var career_title1 = "<tr><td><table cellpadding=0 cellspacing=0 border=0 width=100%><tr class=\"cr_tr1\">";
        var career_pos = "</tr></table></td></tr><tr><td><table cellpadding=0 cellspacing=0 border=0 width=100%><tr class=\"cr_tr2\">";
        var career_title2 = "";
        var career_pos2 = "";
        var width1;
        var width2;

        //Step 6: Calculate the titles
        // Count the number of jobs
        // if > 6 then we'll print them on a single row, otherwise we'll use two rows
        var job_count = 0;
        var job_rows = 2;
        var job_width1 = 0;
        var job_width2 = 0;
        for (var b = 0; b < jtoshow; b++) { if (jobArray[b].Firm != "Filler") { job_count++; } }
        if (job_count <= 6) {
            job_rows = 1;
            document.getElementById("ppane_car").style.height = "80px";
        }
        else {
            document.getElementById("ppane_car").style.height = "113px";
        }

        // now calculate the width
        // if there's one row, then it's simple: each one gets an even proportion of the width
        // but if there are two, then we need to stagger them a bit.  If there's an odd number then
        // this happens automatically (i.e., 3 on the top, 2 on the bottom), buf if there's an even
        // number then we have to push the top row a bit to the right, and the bottom row a bit to the left.
        career_title1 = "";
        career_pos1 = "";
        career_title2 = "";
        career_pos2 = "";

        if (job_rows == 1) { job_width1 = 100 / job_count; }
        else if (isEven(job_count)) { job_width1 = 100 / ((job_count / 2) + .5); job_width2 = job_width1; }
        else { job_width1 = 100 / Math.ceil(job_count / 2); job_width2 = 100 / (Math.floor(job_count / 2) + 1); }

        job_count = 0;
        var alt_rows = 1;
        var job_count_disp;


        for (var c = 0; c < jtoshow; c++) {
            if (jobArray[c].Firm != "Filler") {
                job_count++;
                if (chk_nums == true) { job_count_disp = job_count; } else { job_count_disp = ""; }
                if (job_rows == 2) { alt_rows = isAltRow(job_count); }

                if (alt_rows == 1) {
                    career_title1 += "<td class='car_title1' width=" + job_width1 + "%>" + job_count_disp + " " + jobArray[c].Firm + "</td>";
                    career_pos1 += "<td class='car_pos1' width=" + job_width1 + "%>" + jobArray[c].Title + "</td>";
                }
                else {
                    career_title2 += "<td class='car_title2' width=" + job_width2 + "%>" + job_count_disp + " " + jobArray[c].Firm + "</td>";
                    career_pos2 += "<td class='car_pos2' width=" + job_width2 + "%>" + jobArray[c].Title + "</td>";
                }
            }
        }
        if (job_rows == 2) {
            if (isEven(job_count) == true) {
                career_title1 += "<td class='car_title1' width=" + job_width1 / 2 + "%></td>";
                career_pos1 += "<td class='car_pos1' width=" + job_width1 / 2 + "%></td>";
                career_title2 = "<td class='car_title2' width=" + job_width2 / 2 + "%></td>" + career_title2;
                career_pos2 = "<td class='car_pos2' width=" + job_width2 / 2 + "%></td>" + career_pos2;
            }
            else {
                career_title2 = "<td class='car_title2' width=" + job_width2 / 2 + "%></td>" + career_title2 + "<td class='car_title2' width=" + job_width2 / 2 + "%></td>";
                career_pos2 = "<td class='car_pos2' width=" + job_width2 / 2 + "%></td>" + career_pos2 + "<td class='car_pos2' width=" + job_width2 / 2 + "%></td>";
            }
        }

        // Now put on the front and back of each row

        career_title1 = "<table border=0 cellpadding=0 cellspacing=0 border=0 width=100%><tr class=\"cr_tr1\">" + career_title1 + "</tr></table>";
        career_pos1 = "<table cellpadding=0 cellspacing=0 border=0 width=100%><tr class=\"cr_tr2\">" + career_pos1 + "</tr></table>";

        if (job_rows == 2) {
            career_title2 = "<table cellpadding=0 cellspacing=0 border=0  width=100%><tr class=\"cr_tr1\">" + career_title2 + "</tr></table>";
            career_pos2 = "<table cellpadding=0 cellspacing=0 border=0 width=100%><tr class=\"cr_tr2\">" + career_pos2 + "</tr></table>";
        }
        else {
            career_title2 = "";
            career_pos2 = "";
        }

        document.getElementById("career_row1").innerHTML = career_title1;
        document.getElementById("career_row2").innerHTML = career_pos1;
        document.getElementById("career_row3").innerHTML = career_title2;
        document.getElementById("career_row4").innerHTML = career_pos2;
    }


    $(document).ready(function () {
        $("input:text, textarea, select").addClass("input_inactive_ob");
        $("input:text, textarea, select").focus(function () {
            $(this).addClass("input_active_ob").removeClass("input_inactive_ob");
        }).blur(function () {
            $(this).removeClass("input_active_ob").addClass("input_inactive_ob");
        });

    });	