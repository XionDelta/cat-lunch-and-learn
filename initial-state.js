const field =
[
    [`.`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`.`,`.`,`.`,`#`,`.`,`|`,`#`,`|`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`|`,`#`,`|`,`|`,`.`,`|`,`#`,`.`,`.`,`.`,`#`,`.`,`#`,`.`],
    [`.`,`#`,`.`,`#`,`.`,`#`,`.`,`|`,`.`,`|`,`#`,`#`,`.`,`|`,`#`,`#`,`|`,`.`,`|`,`|`,`#`,`.`,`.`,`#`,`|`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`.`,`.`,`.`,`.`,`|`,`#`,`|`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`.`],
    [`.`,`.`,`|`,`.`,`.`,`#`,`.`,`#`,`#`,`|`,`#`,`.`,`.`,`#`,`.`,`|`,`#`,`#`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`#`,`|`,`#`,`.`,`|`,`|`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`|`,`.`,`.`],
    [`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`.`,`#`,`|`,`.`,`|`,`#`,`#`,`.`,`|`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`#`,`|`,`|`,`.`],
    [`|`,`#`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`|`,`#`,`.`,`#`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`|`,`|`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`#`,`|`,`#`,`|`],
    [`#`,`|`,`#`,`#`,`|`,`.`,`.`,`|`,`.`,`|`,`#`,`|`,`|`,`.`,`|`,`#`,`|`,`.`,`|`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`|`,`.`,`#`,`#`,`.`,`|`,`#`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`],
    [`.`,`#`,`|`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`|`,`|`,`#`,`|`,`|`,`#`,`.`,`|`,`|`,`#`,`|`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`|`,`|`],
    [`.`,`#`,`.`,`#`,`.`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`|`,`.`,`|`,`.`,`|`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`|`,`|`],
    [`|`,`.`,`|`,`|`,`|`,`#`,`#`,`|`,`#`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`.`,`.`,`#`,`.`,`#`,`.`,`|`,`.`,`#`,`.`,`|`,`#`,`.`,`.`,`.`,`#`,`#`,`.`,`|`],
    [`|`,`.`,`.`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`#`,`.`,`#`,`|`,`#`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`|`,`|`,`|`,`|`,`.`,`|`,`.`,`#`,`.`,`|`,`#`,`.`,`#`,`.`,`.`,`.`,`.`],
    [`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`.`,`|`,`|`,`|`,`.`,`|`,`#`,`.`,`.`],
    [`.`,`.`,`.`,`.`,`.`,`|`,`|`,`.`,`|`,`.`,`|`,`|`,`#`,`|`,`#`,`.`,`.`,`|`,`|`,`.`,`.`,`.`,`.`,`#`,`|`,`.`,`|`,`.`,`|`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`],
    [`|`,`#`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`#`,`.`,`|`,`.`,`#`,`#`,`|`,`.`,`.`,`|`,`.`,`|`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`],
    [`#`,`.`,`|`,`|`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`#`,`|`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`#`,`|`,`|`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`],
    [`.`,`|`,`.`,`|`,`.`,`.`,`.`,`|`,`.`,`|`,`.`,`#`,`|`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`|`,`|`,`.`,`|`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`.`],
    [`#`,`#`,`#`,`.`,`.`,`.`,`.`,`|`,`|`,`#`,`.`,`#`,`.`,`.`,`#`,`.`,`#`,`|`,`.`,`#`,`#`,`|`,`.`,`#`,`#`,`.`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`#`,`#`,`|`,`.`,`#`,`.`,`|`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`],
    [`.`,`#`,`.`,`#`,`.`,`.`,`|`,`#`,`#`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`|`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`|`,`.`,`#`,`#`,`#`,`.`,`|`,`.`,`.`,`#`,`.`,`|`,`|`,`#`,`.`],
    [`|`,`.`,`.`,`#`,`.`,`|`,`.`,`#`,`.`,`.`,`|`,`#`,`#`,`.`,`#`,`.`,`|`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`|`,`.`,`.`,`#`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`|`,`|`,`.`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`#`],
    [`.`,`.`,`.`,`|`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`|`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`],
    [`.`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`|`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`.`,`#`,`#`,`#`,`#`,`|`,`|`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`#`,`#`,`.`,`#`,`.`,`.`],
    [`|`,`#`,`.`,`#`,`#`,`#`,`.`,`.`,`#`,`.`,`.`,`#`,`|`,`#`,`|`,`.`,`|`,`.`,`.`,`#`,`|`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`#`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`|`,`#`,`.`,`.`,`#`,`.`,`#`,`#`,`.`,`|`,`.`,`.`,`#`],
    [`.`,`|`,`#`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`|`,`.`,`#`,`#`,`.`,`.`,`.`,`|`,`#`,`.`,`|`,`|`,`.`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`|`,`#`,`.`,`#`,`.`],
    [`.`,`|`,`.`,`.`,`|`,`|`,`|`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`|`,`#`,`#`,`.`,`#`,`.`,`|`,`#`,`.`,`|`,`.`,`.`,`#`,`.`,`.`,`|`,`#`,`.`],
    [`|`,`#`,`|`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`.`,`|`,`|`,`|`,`.`,`.`,`|`,`.`,`#`,`#`,`#`,`|`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`|`,`|`,`.`,`|`,`#`,`#`,`.`,`.`,`|`,`|`,`.`],
    [`.`,`.`,`#`,`.`,`|`,`.`,`.`,`.`,`|`,`|`,`#`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`.`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`#`,`.`,`#`,`#`,`#`,`.`,`#`,`.`,`.`,`#`,`.`],
    [`|`,`.`,`|`,`|`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`|`,`|`,`.`,`|`,`.`,`#`,`#`,`|`,`.`,`|`,`|`,`|`,`|`,`.`,`.`,`.`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`],
    [`.`,`.`,`#`,`#`,`.`,`#`,`.`,`|`,`#`,`.`,`.`,`|`,`|`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`|`,`#`,`.`,`|`,`|`,`.`,`|`,`.`,`|`,`|`,`.`,`|`,`.`,`#`,`|`,`|`,`.`,`|`,`.`,`.`,`#`,`.`,`|`,`|`,`#`],
    [`.`,`|`,`.`,`.`,`.`,`#`,`#`,`|`,`.`,`.`,`|`,`.`,`#`,`.`,`#`,`.`,`.`,`#`,`#`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`|`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`|`,`#`,`.`,`.`,`.`,`#`,`|`,`|`],
    [`|`,`.`,`|`,`#`,`#`,`.`,`|`,`|`,`|`,`|`,`|`,`.`,`|`,`.`,`|`,`|`,`.`,`.`,`.`,`|`,`.`,`|`,`|`,`.`,`#`,`#`,`.`,`.`,`|`,`.`,`|`,`|`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`|`],
    [`.`,`.`,`#`,`.`,`|`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`],
    [`#`,`#`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`.`,`#`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`],
    [`#`,`#`,`|`,`|`,`|`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`|`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`|`,`|`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`|`,`#`,`|`],
    [`.`,`|`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`|`,`|`,`#`,`|`,`|`,`#`],
    [`.`,`.`,`|`,`.`,`|`,`#`,`.`,`|`,`.`,`.`,`.`,`#`,`#`,`.`,`|`,`.`,`#`,`.`,`#`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`#`,`|`,`#`,`.`,`|`,`.`,`|`],
    [`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`#`,`#`,`#`,`#`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`#`,`.`,`.`,`|`,`.`,`|`,`#`,`#`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`|`,`.`,`|`,`#`,`.`,`#`,`.`],
    [`.`,`#`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`#`,`.`,`|`,`.`,`.`,`#`,`.`,`|`,`.`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`#`,`.`,`|`,`.`,`.`,`|`,`#`,`.`,`.`,`.`,`.`],
    [`.`,`|`,`.`,`.`,`|`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`#`,`.`,`#`,`#`,`#`,`|`,`#`,`|`,`#`,`.`,`.`,`.`,`.`,`|`,`|`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`.`],
    [`.`,`.`,`#`,`.`,`.`,`#`,`#`,`.`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`|`,`#`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`|`,`#`,`.`,`|`,`.`,`#`,`#`,`#`,`|`,`.`,`.`,`.`,`.`,`#`,`|`,`|`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`],
    [`.`,`#`,`.`,`.`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`|`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`],
    [`|`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`|`,`#`,`|`,`#`,`#`,`|`,`.`,`.`,`|`,`|`,`#`,`.`,`.`,`.`],
    [`.`,`.`,`.`,`|`,`#`,`.`,`|`,`#`,`.`,`.`,`#`,`|`,`#`,`.`,`.`,`|`,`|`,`|`,`.`,`.`,`.`,`#`,`.`,`|`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`#`,`#`,`.`,`.`,`.`,`.`,`#`,`|`,`#`,`|`,`.`,`#`,`.`,`|`,`.`,`|`,`|`,`.`,`.`],
    [`|`,`.`,`.`,`#`,`|`,`|`,`|`,`.`,`#`,`|`,`|`,`#`,`#`,`#`,`#`,`#`,`.`,`|`,`#`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`|`,`.`,`|`,`|`,`.`,`.`,`.`,`|`,`#`,`#`,`.`,`.`,`|`,`.`,`.`],
    [`.`,`|`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`|`,`#`,`|`,`.`,`#`,`#`,`.`,`#`,`.`],
    [`.`,`.`,`.`,`.`,`.`,`.`,`#`,`|`,`|`,`|`,`|`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`.`,`|`,`|`,`.`,`|`,`.`,`.`,`|`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`#`,`.`,`|`,`.`,`.`,`.`],
    [`.`,`#`,`.`,`.`,`.`,`#`,`|`,`|`,`.`,`|`,`.`,`.`,`.`,`|`,`#`,`#`,`.`,`.`,`.`,`|`,`.`,`.`,`|`,`.`,`|`,`|`,`.`,`.`,`#`,`.`,`.`,`|`,`.`,`#`,`|`,`|`,`.`,`.`,`#`,`|`,`.`,`.`,`|`,`|`,`#`,`|`,`.`,`.`,`#`,`.`],
    [`|`,`.`,`|`,`.`,`|`,`#`,`.`,`#`,`.`,`.`,`#`,`|`,`.`,`.`,`#`,`.`,`#`,`#`,`#`,`.`,`#`,`.`,`|`,`.`,`|`,`#`,`.`,`|`,`.`,`.`,`#`,`.`,`|`,`#`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`#`,`|`,`#`,`.`,`|`,`|`,`.`,`#`,`|`],
    [`.`,`#`,`|`,`|`,`.`,`#`,`#`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`|`,`#`,`.`,`.`,`|`,`|`,`|`,`.`,`.`,`.`,`.`,`.`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`#`,`#`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`.`,`#`],
    [`.`,`|`,`#`,`#`,`.`,`.`,`#`,`|`,`|`,`.`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`|`,`#`,`.`,`.`,`.`,`#`,`.`,`.`,`|`,`|`,`|`,`|`,`#`,`|`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`#`,`|`,`.`],
    [`|`,`#`,`.`,`#`,`.`,`#`,`.`,`|`,`#`,`.`,`#`,`|`,`#`,`.`,`.`,`.`,`|`,`|`,`#`,`.`,`.`,`.`,`.`,`.`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`|`,`|`,`.`,`.`,`.`,`.`,`.`,`.`,`#`,`#`,`|`,`.`,`.`,`.`,`.`,`|`,`|`,`.`,`.`],
    [`.`,`#`,`#`,`#`,`#`,`#`,`|`,`#`,`|`,`#`,`.`,`#`,`.`,`.`,`.`,`.`,`#`,`#`,`#`,`|`,`|`,`#`,`.`,`.`,`|`,`.`,`#`,`.`,`.`,`|`,`.`,`.`,`|`,`.`,`#`,`#`,`.`,`.`,`|`,`|`,`|`,`.`,`.`,`#`,`|`,`#`,`.`,`#`,`#`,`.`],
];
