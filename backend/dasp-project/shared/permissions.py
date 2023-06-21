from rest_framework import permissions
from apps.user import data


class IsEditorOwnerOrReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated:
      if request.method in permissions.SAFE_METHODS:
        return request.user.is_active
      return obj.editor == request.user
    return False


class IsReviewerOwnerOrReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated:
      if request.method in permissions.SAFE_METHODS:
        return request.user.is_active
      return obj.reviewer == request.user
    return False


class IsClientOwnerReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated:
      if request.method in permissions.SAFE_METHODS:
        return request.user.is_active
      return obj.client == request.user
    return False


class IsAdmin(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user.is_active and request.user.is_authenticated and request.user.role == data.ADMINISTRATOR

  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated and request.user.role == data.ADMINISTRATOR:
      return request.user.is_active
    return False


class IsReviewer(permissions.BasePermission):
  def has_permission(self, request, view):
    return request.user.is_active and request.user.is_authenticated and request.user.role == data.REVIEWER

  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated and request.user.role == data.REVIEWER:
      return request.user.is_active
    return False


class IsReviewerOwnerSections(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated and request.user == obj.workbook.reviewer:
      if request.method == 'PATCH':
        keys = request.data.keys()
        return 'is_reviewed' in keys and len(keys) == 1 and request.user.is_active
      return request.user.is_active and request.method not in ['POST', 'PUT']
    return False


class IsEditorOwnerSections(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated and request.user == obj.workbook.editor:
      return request.user.is_active
    return False


class IsEditorOwnerComponents(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated and request.user == obj.section.workbook.editor:
      return request.method in ['PUT', 'POST', 'PATCH']
    return False


class IsAdminOrOwner(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
    if request.user.is_authenticated:
      return (request.user == obj or request.user.role == data.ADMINISTRATOR) and request.user.is_active
    return False
