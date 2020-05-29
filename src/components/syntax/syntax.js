import React from "react";
import "../../css/normalize.css";
import "../../css/global.css";

/*
 * syntax.js parses special characters to perform
 * <<highlighting>> or [[linking>http://example.com]]
*/

function highlight(input) {

    var output = [];
    var start = input.indexOf("<<");
    var end = input.indexOf(">>");

    //console.log("start is " + start + ", end is " + end)

    if (start === -1 || end === -1) {
        // No more special characters
        return input;
    } else {
        output.push(input.substring(0, start));
        output.push(<mark>{input.substring(start + 2, end)}</mark>);

        var inputLeft = input.substring(input.indexOf('>>') + 2)
        output.push(highlight(inputLeft))
    }

    return output.flat();
}

function linkAndHighlight(input) {

    //console.log("input: " + JSON.stringify(input))

    var output = [];
    var start = input.indexOf("[[");
    var end = input.indexOf("]]");

    if (start === -1 || end === -1) {
        // No more special characters. Perform highlighting
        return highlight(input);
    } else {
        // highlight the non-link portion
        output.push(highlight(input.substring(0, start)));
        var linkUnparsed = input.substring(start + 2, end);
        var linkName = linkUnparsed.substring(0, linkUnparsed.indexOf('>'))
        var linkSource = linkUnparsed.substring(linkUnparsed.indexOf('>') + 1)
        output.push(<a target="_blank" rel="noreferrer noopener" className="paragraph__link" href={linkSource}>{linkName}</a>);

        var inputLeft = input.substring(input.indexOf(']]') + 2)
        output.push(linkAndHighlight(inputLeft))
    }

    return output.flat();
}

export default props => (
    <>
        {linkAndHighlight(props.content)}
    </>
);
