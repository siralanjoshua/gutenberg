/**
 * Gets the all format objects at the start of the selection.
 *
 * @param {Object} value Value to inspect.
 *
 * @return {?Object} Active format objects.
 */
export function getActiveFormats( { formats, start, activeFormats } ) {
	if ( start === undefined ) {
		return [];
	}

	if ( activeFormats ) {
		return activeFormats;
	}

	const formatsBefore = formats[ start - 1 ] || [];
	const formatsAfter = formats[ start ] || [];

	if ( formatsBefore.length > formatsAfter.length ) {
		return formatsBefore;
	}

	return formatsAfter;
}
